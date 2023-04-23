import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const dislikeRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.dislike.findMany();
  }),
});
