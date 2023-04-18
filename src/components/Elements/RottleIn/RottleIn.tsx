import { type HTMLMotionProps, motion } from "framer-motion";
import { type FC } from "react";
import { twMerge } from "tailwind-merge";

export type RottleInProps = {
  delay?: number;
} & HTMLMotionProps<"div">;
/**
 * RottleIn
 */
export const RottleIn: FC<RottleInProps> = ({
  delay,
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={twMerge("h-40 w-40 bg-white shadow-inner", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};