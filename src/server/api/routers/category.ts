import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany({});
  }),

  // 作成する
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existingCategory = await ctx.prisma.category.findFirst({
        where: {
          name: input.name,
        },
      });

      if (existingCategory) {
        throw new TRPCError({
          message: "既に存在するカテゴリです",
          code: "CONFLICT",
        });
      }

      return ctx.prisma.category.create({
        data: {
          name: input.name,
        },
      });
    }),
});
