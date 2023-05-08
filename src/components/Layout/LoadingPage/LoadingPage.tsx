import { LoadingSpinner } from "@/components/Elements/LoadingSpinner";

import type { FC } from "react";

/**
 * LoadingPage
 */
export const LoadingPage: FC = () => {
  return (
    <div className="grid h-without-header w-screen place-content-center">
      <LoadingSpinner />
    </div>
  );
};
