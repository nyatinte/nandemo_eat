import { LoadingSpinner } from "@/components/Elements/LoadingSpinner";

import type { FC } from "react";

/**
 * LoadingPage
 */
export const LoadingPage: FC = () => {
  return (
    <div className="absolute right-0 top-0 grid h-screen w-screen place-content-center">
      <LoadingSpinner />
    </div>
  );
};
