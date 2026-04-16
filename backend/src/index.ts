import { Elysia, t } from 'elysia';
import { prisma } from './lib/prisma';
import { TodoPlain } from './generated/prismabox/Todo';

const app = new Elysia()
  // Health check
  .get('/', () => {
    return { message: 'Hello Elysia with Prisma!' };
  })
  // Get all todos
  .get(
    '/todos',
    async () => {
      const todos = await prisma.todo.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return todos;
    },
    {
      response: t.Array(TodoPlain),
    },
  )
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
