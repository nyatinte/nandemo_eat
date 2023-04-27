import { atom } from "jotai";

export const sidebarOpenAtom = atom<boolean>(false);

export const toggleSidebarAtom = atom(
  (get) => get(sidebarOpenAtom),
  (_get, set) => set(sidebarOpenAtom, (prev) => !prev)
);

export const closeSidebarAtom = atom(
  (get) => get(sidebarOpenAtom),
  (_get, set, _arg) => set(sidebarOpenAtom, false)
);
