import type { FC } from "react";
export type ContainerProps = { children: React.ReactNode };
/**
 * Container
 */
export const Container: FC<ContainerProps> = (props) => {
  return (
    <div className="container mx-auto min-h-without-header w-screen max-w-xl bg-bg p-4 sm:p-8">
      {props.children}
    </div>
  );
};
