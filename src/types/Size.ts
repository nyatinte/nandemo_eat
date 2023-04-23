import { z } from "zod";

export const size = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
] as const satisfies readonly string[];

export const sizeSchema = z.enum(size);

export type Size = z.infer<typeof sizeSchema>;
