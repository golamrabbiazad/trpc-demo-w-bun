import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { db } from "./db";

export const appRouter = router({
  userList: publicProcedure.query(async () => {
    const user = await db.user.findMany();

    return user;
  }),

  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;

    const user = await db.user.findById(input);

    return user;
  }),

  userCreate: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await db.user.create(input);
      return user;
    }),
});

export type AppRouter = typeof appRouter;
