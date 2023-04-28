import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@/utils/api";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Avatar, Link } from "@/components/Elements";
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
      <div className="hero h-without-header">
        <div className="hero-content text-center">
          <div className="flex max-w-md flex-col gap-4">
            <h1 className="text-5xl font-bold">
              <span className="stroke-white stroke-1 text-lime-400">
                なんでも
              </span>
              <span className="text-orange-300">EAT</span>
            </h1>
            <div className="justify-between rounded-md border border-white bg-blue-200 p-4">
              <div className="chat chat-start">
                <div className="chat-bubble bg-white text-black">
                  ご飯何がいい？
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble bg-white text-black">
                  なんでもいいよ！
                </div>
              </div>
            </div>
            <p className="text-lg font-semibold">
              なんでもいいよって言ってるけど、
              <br />
              実はなんでもいいわけじゃない。
              <br />
              苦手なものなものはあるけど、言いにくい。
              <br />
              そんなときに使えるアプリ。
            </p>

            <button className="btn-primary btn">使ってみる</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
