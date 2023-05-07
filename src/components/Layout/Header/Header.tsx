import { useUser } from "@clerk/nextjs";
import Image from "next/image";

import { Avatar } from "@/components/Elements";

import { Sidebar } from "../Sidebar";

import type { FC } from "react";



/**
 * Header
 */
export const Header: FC = () => {
  const user = useUser();
  return (
    <header className="z-0 flex h-20 w-screen items-center justify-end gap-4 border border-b px-4">
      <Sidebar />
      <div className="grid place-content-center">
        <Avatar src={user.user?.profileImageUrl} />
      </div>
      <Image
        className="object-contain"
        src="/なんでもEAT.png"
        alt="Logo"
        width={56}
        height={56}
      />
    </header>
  );
};
