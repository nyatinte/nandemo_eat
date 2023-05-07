import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const subCategoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.subCategory.findMany({});
  }),

  // 作成する
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existingSubCategory = await ctx.prisma.subCategory.findFirst({
        where: {
          name: input.name,
        },
      });

      if (existingSubCategory) {
        throw new TRPCError({
          message: "既に存在する食材です。",
          code: "CONFLICT",
        });
      }

      return ctx.prisma.subCategory.create({
        data: {
          name: input.name,
        },
      });
    }),
});
