import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const ingredientRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.ingredient.findMany({});
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existingIngredient = await ctx.prisma.ingredient.findFirst({
        where: {
          name: input.name,
        },
      });

      if (existingIngredient) {
        throw new TRPCError({
          message: "既に存在する食材です。",
          code: "CONFLICT",
        });
      }

      return ctx.prisma.ingredient.create({
        data: {
          name: input.name,
        },
      });
    }),
});
