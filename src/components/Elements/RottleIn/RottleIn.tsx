import { type HTMLMotionProps, motion } from "framer-motion";
import { type FC } from "react";
import { twMerge } from "tailwind-merge";

export type RottleInProps = {
  delay?: number;
  isDroped?: boolean;
} & HTMLMotionProps<"div">;
/**
 * RottleIn
 */
export const RottleIn: FC<RottleInProps> = ({
  delay,
  className,
  children,
  isDroped,
  ...props
}) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0,
          transition: {
            duration: 0.5,
          },
        },
        animate: {
          rotate: 360,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay,
          },
        },
        isDroped: {
          opacity: 0,
          y: 100,
        },
      }}
      initial="initial"
      transition={{ duration: 1.5 }}
      animate={isDroped ? "isDroped" : "animate"}
      className={twMerge(
        "grid h-40 w-40 place-content-center rounded-3xl border-4 bg-white p-4 text-xl font-bold shadow-inner",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
