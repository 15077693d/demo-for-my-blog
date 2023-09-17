import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const shoppingItemRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.shoppingItem.findMany();
  }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const shoppingItem = await ctx.db.shoppingItem.create({
        data: { ...input },
      });
      return shoppingItem;
    }),
});
