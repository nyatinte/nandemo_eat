import { atom } from "jotai";
import { z } from "zod";

/**
 * 料理提案画面のユーザーの選択のZodスキーマ
 */
export const choiceSchema = z.object({
  category: z.string(),
  subCategory: z.string(),
});

/**
 * 料理提案画面のユーザーの選択の型
 */
export type Choice = z.infer<typeof choiceSchema>;

/**
 * 料理提案画面のユーザーの選択を管理するAtom
 * ---
 * ### 関連Atom
 * @see {@link setCategoryAtom} カテゴリをセットする
 * @see {@link setSubCategoryAtom} サブカテゴリをセットする
 */
export const choiceAtom = atom<Choice>({
  category: "",
  subCategory: "",
});

/**
 * カテゴリをセットする
 * ---
 * ### 関連Atom
 * @see {@link choiceAtom} ユーザーの選択を管理するAtom 派生元
 */
export const setCategoryAtom = atom(
  (get) => get(choiceAtom).category,
  (get, set, category: string) => {
    const choice = get(choiceAtom);
    set(choiceAtom, {
      ...choice,
      category,
    });
  }
);

/**
 * サブカテゴリをセットする
 * ---
 * ### 関連Atom
 * @see {@link choiceAtom} ユーザーの選択を管理するAtom 派生元
 */
export const setSubCategoryAtom = atom(
  (get) => get(choiceAtom).subCategory,
  (get, set, subCategory: string) => {
    const choice = get(choiceAtom);
    set(choiceAtom, {
      ...choice,
      subCategory,
    });
  }
);
