import { BallTriangle } from "react-loader-spinner";

import { type Size } from "@/types/Size";

import type { FC } from "react";
export type LoadingSpinnerProps = {
  size?: Size;
  color?: string;
};
/**
 * LoadingSpinner
 */
export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = "md" satisfies Size,
  color = "#10b981",
}) => {
  const sizeItems: Record<Size, number> = {
    xs: 30,
    sm: 40,
    md: 50,
    lg: 60,
    xl: 70,
  };
  return (
    <BallTriangle
      height={sizeItems[size]}
      width={sizeItems[size]}
      radius={6}
      color={color}
      ariaLabel="ball-triangle-loading"
      visible={true}
    />
  );
};
