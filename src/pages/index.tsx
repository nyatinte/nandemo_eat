import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@/utils/api";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Avatar } from "@/components/Elements";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useState } from "react";

const Home: NextPage = () => {
  const user = useUser();
  const [isShow, setIsShow] = useState(false);

  const hide: HTMLMotionProps<"div">["animate"] = {
    opacity: 0,
    rotate: 0,
    // 右にすこしずれたあと、左にスライドアウトする
    transition: {
      type: "spring",
      stiffness: 260,
      duration: 500,
    },
    x: [100, -100],
  };
  const show = (delay: number): HTMLMotionProps<"div">["animate"] => ({
    rotate: 360,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: delay,
    },
  });

  return (
    <>
      <Head>
        <title>なんでもEAT</title>
        <meta
          name="description"
          content="ご飯何がいい？なんでもいいよはもうやめよう！"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
