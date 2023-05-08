import { type MotionProps, motion } from "framer-motion";
import { useAtom } from "jotai";
import { useCallback, type FC } from "react";

import { sectionAtom } from "@/atoms/sectionAtom";

const chatBubbleVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { delay: 0.5, bounce: 0.25, type: "spring" },
} satisfies MotionProps;

/**
 * Hero section
 */
export const HeroSection: FC = () => {
  const [sectionIndex, setSection] = useAtom(sectionAtom);
  const isCurrentSection = sectionIndex === "hero";
  const handleClickBtn = useCallback(() => {
    setSection("category");
  }, [setSection]);
  return (
    <motion.div
      className="hero  h-without-header"
      initial="hidden"
      animate={isCurrentSection ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.5,
            delayChildren: 0.5,
          },
        },
      }}
      transition={{
        delayChildren: 0.5,
      }}
    >
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
              <motion.div
                className="chat-bubble bg-white text-black"
                {...chatBubbleVariants}
              >
                ご飯何がいい？
              </motion.div>
            </div>
            <motion.div
              className="chat chat-end flex justify-end"
              {...chatBubbleVariants}
              transition={{
                ...chatBubbleVariants.transition,
                delay: 1.5,
              }}
            >
              <div className="chat-bubble bg-white text-black">
                なんでもいいよ！
              </div>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.5,
              duration: 1,
              delayChildren: 1,
            }}
          >
            <p className="text-lg font-semibold">
              なんでもいいよって言ってるけど、
              <br />
              実はなんでもいいわけじゃない。
              <br />
              苦手なものなものはあるけど、言いにくい。
              <br />
              そんなときに使えるアプリ。
            </p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 3.5,
                type: "spring",
                bounce: 0.25,
              }}
            >
              <button className="btn-primary btn" onClick={handleClickBtn}>
                使ってみる
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
