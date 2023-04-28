import type { FC } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Link } from "@/components/Elements";
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
      <MenuItem>
        <Link href="/" label="Home" />
      </MenuItem>
      <MenuItem>
        {user.isSignedIn ? (
          <>
            <SignOutButton>
              <button className="btn-wide btn">Sign Out</button>
            </SignOutButton>
          </>
        ) : (
          <SignInButton>
            <button className="btn-wide btn">Sign In</button>
          </SignInButton>
        )}
      </MenuItem>
      <MenuItem>
        <Link href="/dish" label="Dish" />
      </MenuItem>
      <MenuItem>
        <Link href="/dislike" label="Dislike" />
      </MenuItem>
    </motion.ul>
  );
};
