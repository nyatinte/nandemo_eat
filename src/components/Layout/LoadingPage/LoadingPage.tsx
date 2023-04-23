import { LoadingSpinner } from "@/components/Elements/LoadingSpinner";
import type { FC } from "react";

/**
 * LoadingPage
 */
export const LoadingPage: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <LoadingSpinner />
    </div>
  );
};
