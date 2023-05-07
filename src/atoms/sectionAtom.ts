import { atom } from "jotai";
import { z } from "zod";

/**
 * 料理提案画面のセクションのZodスキーマ
 */
export const sectionSchema = z.enum([
  "hero",
  "category",
  "subCategory",
  "dish",
  "done",
]);

/**
 * 料理提案画面のセクションの型
 */
export type Section = z.infer<typeof sectionSchema>;

/**
 * 料理提案画面のセクションを管理するAtom
 * ---
 */
export const sectionAtom = atom<Section>("hero");
