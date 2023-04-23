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

  /**
   * create a dish
   * @param name
   * @param ingredients
   * @param category
   * @param subCategories
   * @returns
   */
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        ingredients: z.array(z.string()),
        category: z.string(),
        subCategories: z.array(z.string()),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.dish.create({
        data: {
          name: input.name,
          ingredients: {
            connect: input.ingredients.map((ingredient) => ({
              name: ingredient,
            })),
          },
          category: {
            connect: {
              name: input.category,
            },
          },
          subCategories: {
            connect: input.subCategories.map((subCategory) => ({
              name: subCategory,
            })),
          },
        },
      });
    }),
});
