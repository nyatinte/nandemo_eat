import * as React from "react";
import { motion } from "framer-motion";
import { useAtom, useSetAtom } from "jotai";
import { closeSidebarAtom } from "@/atoms/sidebarOpenAtom";

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

type MenuItemProps = {
  children: React.ReactNode;
};
/**
 * MenuItem
 *
 */
export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const onClose = useSetAtom(closeSidebarAtom);
  return (
    <motion.li
      className="mb-5 flex cursor-pointer list-none items-center justify-center"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClose}
    >
      {props.children}
    </motion.li>
  );
};
