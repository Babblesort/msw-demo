import { render, screen } from '@testing-library/react';
import { tasksHandlerException } from './api-mocks/handlers';
import { mswServer } from './api-mocks/msw-server';
import TaskList from './TaskList';

describe('Component: TaskList', () => {
  it('displays returned tasks on successful fetch', async () => {
    render(<TaskList />);

    const displayedTasks = await screen.findAllByTestId(/task-id-\d+/);
    expect(displayedTasks).toHaveLength(2);
    expect(screen.getByText('Task Zero')).toBeInTheDocument();
    expect(screen.getByText('Task One')).toBeInTheDocument();
  });

  it('displays error message when fetching tasks raises error', async () => {
    mswServer.use(tasksHandlerException);
    render(<TaskList />);

    const errorDisplay = await screen.findByText('Failed to fetch tasks');
    expect(errorDisplay).toBeInTheDocument();

    const displayedTasks = screen.queryAllByTestId(/task-id-\d+/);
    expect(displayedTasks).toEqual([]);
  });
});
