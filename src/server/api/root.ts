import { createTRPCRouter } from "@/server/api/trpc";
import { dishRouter } from "./routers/dish";
import { ingredientRouter } from "./routers/ingredient";
import { categoryRouter } from "./routers/category";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  dish: dishRouter,
  ingredient: ingredientRouter,
  category: categoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
