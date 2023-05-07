import { type NextPage } from "next";

import { Link } from "@/components/Elements";

const NotFoundPage: NextPage = () => {
  return (
    <div className="hero h-without-header">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">
            このページは存在しません。URLを確認してください。
          </p>
          <Link href="/" label="ホームへ" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
