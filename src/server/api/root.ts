import { createTRPCRouter } from "@/server/api/trpc";

import { categoryRouter } from "./routers/category";
import { dishRouter } from "./routers/dish";
import { dislikeRouter } from "./routers/dislike";
import { ingredientRouter } from "./routers/ingredient";
import { subCategoryRouter } from "./routers/subCategory";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  dish: dishRouter,
  ingredient: ingredientRouter,
  category: categoryRouter,
  subCategory: subCategoryRouter,
  dislike: dislikeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
