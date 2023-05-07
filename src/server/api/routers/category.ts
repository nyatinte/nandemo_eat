import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

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

  getRandom: publicProcedure.query(async ({ ctx }) => {
    const categories = await ctx.prisma.category.findMany({});
    const randomCategories = categories
      .sort(() => Math.random() - Math.random())
      .slice(0, 3);
    return randomCategories;
  }),
});
