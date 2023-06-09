import { type AnimationProps, motion } from "framer-motion";
import { useAtom } from "jotai";
import { useRef, type FC } from "react";

import { toggleSidebarAtom } from "@/atoms/sidebarOpenAtom";
import { useDimensions } from "@/hooks/useDimensions";

import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";



const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
} satisfies AnimationProps["variants"];

/**
 * Sidebar
 * @see https://codesandbox.io/s/framer-motion-side-menu-mx2rw
 */
export const Sidebar: FC = () => {
  const [isOpen, toggleIsOpen] = useAtom(toggleSidebarAtom);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="absolute left-0 top-0 z-10 w-72"
        variants={{
          open: {
            height: "100vh",
          },
          closed: {
            height: "80px",
            transition: {
              delay: 1,
            },
          },
        }}
      >
        <motion.div
          className="absolute bottom-0 left-0 top-0 w-72 bg-white"
          variants={sidebar}
        />
        <Navigation />
        <MenuToggle toggle={() => toggleIsOpen()} />
      </motion.nav>
    </>
  );
};
