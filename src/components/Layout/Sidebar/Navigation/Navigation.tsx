import type { FC } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Link, type LinkProps } from "@/components/Elements";
import { useAtomValue } from "jotai";
import { sidebarOpenAtom } from "@/atoms/sidebarOpenAtom";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const linkItems: LinkProps[] = [
  {
    href: "/",
    label: "ホーム",
  },
  {
    href: "/dish",
    label: "料理を追加する",
  },
  {
    href: "/dislike",
    label: "苦手な食材を追加する",
  },
];
/**
 * Navigation
 */
export const Navigation: FC = () => {
  const user = useUser();
  const isSidebarOpen = useAtomValue(sidebarOpenAtom);
  return (
    <motion.ul
      variants={variants}
      className="absolute top-24 w-72 p-6"
      style={{ pointerEvents: isSidebarOpen ? "auto" : "none" }}
    >
      {linkItems.map((item) => (
        <MenuItem key={item.href}>
          <Link href={item.href} label={item.label} />
        </MenuItem>
      ))}
      <MenuItem>
        {user.isSignedIn ? (
          <>
            <SignOutButton>
              <button className="btn-wide btn">ログアウト</button>
            </SignOutButton>
          </>
        ) : (
          <SignInButton>
            <button className="btn-wide btn">ログイン</button>
          </SignInButton>
        )}
      </MenuItem>
    </motion.ul>
  );
};
