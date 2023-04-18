import { memo, type ComponentProps, type FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarProps = ComponentProps<"img"> & {
  size?: Size;
};
export const Avatar: FC<AvatarProps> = ({ src, size, ...props }) => {
  const sizeClass = useMemo(() => {
    switch (size) {
      case "xs":
        return "w-6";
      case "sm":
        return "w-8";
      case "md":
        return "w-12";
      case "lg":
        return "w-16";
      case "xl":
        return "w-24";
      default:
        return "w-12";
    }
  }, [size]);
  return (
    <div className="avatar">
      <div className={twMerge("rounded-full", sizeClass)}>
        <img src={src} alt="avatar" {...props} />
      </div>
    </div>
  );
};
