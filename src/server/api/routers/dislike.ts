import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";

export const dislikeRouter = createTRPCRouter({
  getAll: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.dislike.findMany({
      where: {
        userId: ctx.userId,
      },
    });
  }),

  create: privateProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ ctx, input }) => {
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
