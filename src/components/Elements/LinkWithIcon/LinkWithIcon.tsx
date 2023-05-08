import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

import type { FC, ReactNode } from "react";
export type LinkWithIconProps = {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
};
/**
 * LinkWithIcon
 */
export const LinkWithIcon: FC<LinkWithIconProps> = (props) => {
  return (
    <NextLink
      target="_blank"
      className={twMerge("btn gap-2", props.className)}
      href={props.href}
    >
      {props.icon}
      {props.label}
    </NextLink>
  );
};
