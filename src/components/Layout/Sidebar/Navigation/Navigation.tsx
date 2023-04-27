import type { FC } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";

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
  return (
    <motion.ul variants={variants} className="absolute top-24 w-72 p-6 ">
      <MenuItem />
    </motion.ul>
  );
};
