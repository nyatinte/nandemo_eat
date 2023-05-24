import { createTRPCRouter } from "@/server/api/trpc";

import { categoryRouter } from "./routers/category";
import { dishRouter } from "./routers/dish";
import { dislikeRouter } from "./routers/dislike";
import { ingredientRouter } from "./routers/ingredient";
import { subCategoryRouter } from "./routers/subCategory";

export const appRouter = createTRPCRouter({
  dish: dishRouter,
  ingredient: ingredientRouter,
  category: categoryRouter,
  subCategory: subCategoryRouter,
  dislike: dislikeRouter,
});

export type AppRouter = typeof appRouter;
