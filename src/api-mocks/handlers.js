import { rest } from 'msw';
import { baseUrl } from '../api/http-client';

const mockTasks = [
  { id: 0, name: 'Task Zero', completed: false },
  { id: 1, name: 'Task One', completed: true },
];

const getTasksPath = `${baseUrl}/tasks`;

const tasksHandler = rest.get(getTasksPath, async (req, res, ctx) => {
  return res(ctx.json(mockTasks));
});

export const tasksHandlerException = rest.get(
  getTasksPath,
  async (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ message: 'Deliberately broken request' })
    );
  }
);

export const handlers = [tasksHandler];
