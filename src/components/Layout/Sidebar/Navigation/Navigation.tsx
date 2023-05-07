import { type FC } from "react";
import { type AnimationProps, motion } from "framer-motion";
import { MenuItem } from "../MenuItem";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Link, type LinkProps } from "@/components/Elements";

const variants = {
  open: {
    display: "block",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 1 },
  },
} satisfies AnimationProps["variants"];

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

  return (
    <motion.ul variants={variants} className="absolute top-24 w-72 p-6">
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
