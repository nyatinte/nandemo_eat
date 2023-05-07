import { twMerge } from "tailwind-merge";

import type { FC } from "react";
export type XmarkIconProps = { className?: string };
/**
 * XmarkIcon
 */
export const XmarkIcon: FC<XmarkIconProps> = ({ className }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={twMerge("h-6 w-6 duration-200 hover:opacity-70", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
