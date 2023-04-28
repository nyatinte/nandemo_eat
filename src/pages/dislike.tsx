import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

const DislikePage: NextPage = () => {
  const user = useUser();
  if (!user.isSignedIn) {
    return (
      <>
        <div>
          苦手なもの登録機能を利用するためにはログインが必要です。お手持ちのGoogleアカウント、Lineアカウントなどで簡単にログインできます。
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>苦手なもの登録</title>
      </Head>
      <div>
        <h1>苦手な食べ物を登録する</h1>
      </div>
    </>
  );
};

export default DislikePage;
