import { atom } from "jotai";

/**
 * サイドバーの開閉状態を管理するAtom
 * ---
 * ### 関連Atom
 * @see {@link toggleSidebarAtom} **サイドバーの開閉状態をトグルするAtom**
 * @see {@link closeSidebarAtom} **サイドバーを閉じるAtom**
 */
export const sidebarOpenAtom = atom<boolean>(false);

/**
 * サイドバーの開閉状態をトグルするAtom
 * ---
 * ### 関連Atom
 * @see {@link sidebarOpenAtom} **サイドバーの開閉状態を管理するAtom** (派生元)
 */
export const toggleSidebarAtom = atom(
  (get) => get(sidebarOpenAtom),
  (_get, set) => set(sidebarOpenAtom, (prev) => !prev)
);

/**
 * サイドバーを閉じるAtom
 * ---
 * ### 関連Atom
 * @see {@link sidebarOpenAtom} **サイドバーの開閉状態を管理するAtom** (派生元)
 */
export const closeSidebarAtom = atom(
  (get) => get(sidebarOpenAtom),
  (_get, set, _arg) => set(sidebarOpenAtom, false)
);
