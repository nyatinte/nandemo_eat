import { z } from "zod";

export const selectOptionSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const selectOptionsSchema = z.array(selectOptionSchema);

export type SelectOption = z.infer<typeof selectOptionSchema>;

export type SelectOptions = readonly SelectOption[];
