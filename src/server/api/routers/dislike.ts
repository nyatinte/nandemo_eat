import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";

export const dislikeRouter = createTRPCRouter({
  getAll: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.dislike.findMany({
      where: {
        userId: ctx.userId,
      },
      include: {
        ingredient: true,
      },
    });
  }),

  create: privateProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.dislike.create({
        data: {
          userId: ctx.userId,
          ingredient: {
            connectOrCreate: {
              where: {
                name: input.name,
              },
              create: {
                name: input.name,
              },
            },
          },
        },
      });
    }),

  updateMany: privateProcedure
    .input(
      z.object({
        ingredients: z.array(z.string()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.dislike.deleteMany({
        where: {
          userId: ctx.userId,
        },
      });

      await ctx.prisma.dislike.createMany({
        data: input.ingredients.map((ingredient) => ({
          userId: ctx.userId,
          ingredientName: ingredient,
        })),
      });

      return ctx.prisma.dislike.findMany({
        where: {
          userId: ctx.userId,
        },
        include: {
          ingredient: true,
        },
      });
    }),

  delete: privateProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.dislike.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
