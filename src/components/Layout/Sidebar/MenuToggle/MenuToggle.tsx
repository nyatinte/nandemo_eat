import { type SVGMotionProps, motion } from "framer-motion";

import type { FC } from "react";

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
export type MenuToggleProps = {
  toggle: () => void;
};
/**
 * MenuToggle
 */
export const MenuToggle: FC<MenuToggleProps> = ({ toggle }) => {
  return (
    <button
      className="absolute left-3 top-3 z-10 grid h-14 w-14 cursor-pointer select-none place-content-center rounded-full border-none bg-transparent outline-none"
      onClick={toggle}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        {/* markuplintのエラーは無視 */}
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
