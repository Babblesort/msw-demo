import { render, screen } from '@testing-library/react';
import { getTasks } from './api/tasksService';
import TaskList from './TaskList';

jest.mock('./api/tasksService');

describe('Component: TaskList', () => {
  it('displays returned tasks on successful fetch', async () => {
    getTasks.mockResolvedValue({
      data: [
        { id: 0, name: 'Task Zero', completed: false },
        { id: 1, name: 'Task One', completed: true },
      ],
    });

    render(<TaskList />);

    const displayedTasks = await screen.findAllByTestId(/task-id-\d+/);
    expect(displayedTasks).toHaveLength(2);
    expect(screen.getByText('Task Zero')).toBeInTheDocument();
    expect(screen.getByText('Task One')).toBeInTheDocument();
  });

  it('displays error message when fetching tasks raises error', async () => {
    getTasks.mockRejectedValue(new Error('broken'));

    render(<TaskList />);

    const errorDisplay = await screen.findByText('Failed to fetch tasks');
    expect(errorDisplay).toBeInTheDocument();

    const displayedTasks = screen.queryAllByTestId(/task-id-\d+/);
    expect(displayedTasks).toEqual([]);
  });
});
