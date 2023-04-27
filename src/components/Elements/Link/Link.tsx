import type { FC } from "react";
import NextLink from "next/link";
export type LinkProps = {
  href: string;
  label: string;
};
/**
 * Link
 */
export const Link: FC<LinkProps> = (props) => {
  return (
    <NextLink className="btn-wide btn" href={props.href}>
      {props.label}
    </NextLink>
  );
};
