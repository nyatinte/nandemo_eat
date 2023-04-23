import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const dishRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.dish.findMany({
      include: {
        ingredients: true,
        subCategories: true,
        category: true,
      },
    });
  }),

  /**
   * Get all dishes by category id
   */
  getDishByCategory: publicProcedure
    .input(z.object({ categoryId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.dish.findMany({
        where: {
          categoryId: input.categoryId,
        },
        include: {
          ingredients: true,
          subCategories: true,
          category: true,
        },
      });
    }),

  /**
   * Get all dishes by sub category id
   * @param subCategoryId
   */
  getDishBySubCategory: publicProcedure
    .input(z.object({ subCategoryId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.dish.findMany({
        where: {
          subCategories: {
            some: {
              id: input.subCategoryId,
            },
          },
        },
        include: {
          ingredients: true,
          subCategories: true,
          category: true,
        },
      });
    }),
});
