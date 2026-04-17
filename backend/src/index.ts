import { Elysia, t } from 'elysia';
import { prisma } from './lib/prisma';
import { AuthorPlain } from './generated/prismabox/Author';

const app = new Elysia()
  // Health check
  .get('/', () => {
    return { message: 'Hello Elysia with Prisma!' };
  })
  // Get all todos
  .get(
    '/todos',
    async () => {
      const todos = await prisma.author.findMany();
      return todos;
    },
    {
      response: t.Array(AuthorPlain),
    },
  )
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
