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
 * @see {@link categoryAtom} カテゴリをセットする
 * @see {@link subCategoryAtom} サブカテゴリをセットする
 */
export const choiceAtom = atom<Choice>({
  category: "",
  subCategory: "",
});

/**
 * カテゴリを扱うatom
 * ---
 * ### 関連Atom
 * @see {@link choiceAtom} ユーザーの選択を管理するAtom 派生元
 */
export const categoryAtom = atom(
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
 * サブカテゴリを扱うatom
 * ---
 * ### 関連Atom
 * @see {@link choiceAtom} ユーザーの選択を管理するAtom 派生元
 */
export const subCategoryAtom = atom(
  (get) => get(choiceAtom).subCategory,
  (get, set, subCategory: string) => {
    const choice = get(choiceAtom);
    set(choiceAtom, {
      ...choice,
      subCategory,
    });
  }
);
