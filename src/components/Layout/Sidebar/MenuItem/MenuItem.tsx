import * as React from "react";
import { motion } from "framer-motion";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Avatar } from "@/components/Elements";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = [
  "#FF008C",
  "#D309E1",
  "#9C1AFF",
  "#7700FF",
  "#4400FF",
] as const satisfies readonly string[];

/**
 * MenuItem
 *
 */
export const MenuItem: React.FC = () => {
  const user = useUser();
  return (
    <motion.li
      className="mb-5 flex cursor-pointer list-none items-center justify-center"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {user.isSignedIn ? (
        <>
          <SignOutButton>
            <button className="btn">Sign Out</button>
          </SignOutButton>
        </>
      ) : (
        <SignInButton>
          <button className="btn">Sign In</button>
        </SignInButton>
      )}
    </motion.li>
  );
};
