import { type SubCategory } from "@prisma/client";
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

  getRandom: publicProcedure.query(async ({ ctx }) => {
    const subCategories = await ctx.prisma.subCategory.findMany({});
    const randomSubCategories = subCategories
      .sort(() => Math.random() - Math.random())
      .slice(0, 3);
    return randomSubCategories;
  }),

  getRandomByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ ctx, input }) => {
      console.group("getRandomByCategory");
      console.log("input", input);
      const subCategories = await ctx.prisma.subCategory.findMany({});

      // カテゴリをもとに、該当のカテゴリとサブカテゴリをもつ料理があるかどうかを判定する。もし料理があれば、そのサブカテゴリを返す。
      const subCategoriesByCategory: SubCategory[] = [];
      for (const subCategory of subCategories) {
        const dish = await ctx.prisma.dish.findFirst({
          where: {
            subCategories: {
              some: {
                name: subCategory.name,
              },
            },
            category: {
              name: input.category,
            },
          },
        });
        console.log("dish", dish);
        if (dish) {
          console.groupEnd();
          subCategoriesByCategory.push(subCategory);
        }
      }

      console.log("subCategoriesByCategory", subCategoriesByCategory);
      const randomSubCategories = subCategoriesByCategory
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);
      console.log("randomSubCategories", randomSubCategories);
      console.groupEnd();

      return randomSubCategories;
    }),
});
