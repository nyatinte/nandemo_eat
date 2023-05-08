import { motion } from "framer-motion";
import { useAtomValue, useSetAtom } from "jotai";
import { type FC } from "react";
import { BiRestaurant } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

import { dishAtom } from "@/atoms/choiceAtom";
import { sectionAtom } from "@/atoms/sectionAtom";
import { LinkWithIcon } from "@/components/Elements/LinkWithIcon";
import { Container } from "@/components/Layout/Container";

export const DoneSection: FC = () => {
  const setSection = useSetAtom(sectionAtom);
  const dish = useAtomValue(dishAtom);
  const handleClick = () => {
    setSection("hero");
  };
  return (
    <Container>
      <motion.div
        className="flex flex-col justify-center gap-4"
        initial="hidden"
        animate={"visible"}
        variants={{
          hidden: {
            opacity: 0,
            pointerEvents: "none",
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.5,
            },
            pointerEvents: "auto",
          },
        }}
        transition={{
          delayChildren: 1,
        }}
      >
        <h1 className="text-xl">
          あなたの選んだ料理は
          <span className="font-bold">{dish}</span>
          です！ 早速食べに行きましょう！
        </h1>

        <div className="flex flex-col gap-4">
          <LinkWithIcon
            label="付近のお店を探す"
            className="btn-secondary text-lg"
            icon={<BiRestaurant />}
            href={`https://www.google.co.jp/maps/search/${dish}/hl=ja`}
          />
          <LinkWithIcon
            icon={<FaTwitter />}
            className="bg-twitter text-lg text-white hover:bg-[#0D8ECF]"
            href={`https://twitter.com/intent/tweet?text=今日のご飯は${dish}にしました！%0a%23なんでもEAT%0ahttps://nandemo-eat.vercel.app/`}
            label="ツイッターでシェアする"
          />
        </div>

        <button
          className="btn-primary btn-wide btn mx-auto mt-4 text-lg"
          onClick={handleClick}
        >
          最初から
        </button>
      </motion.div>
    </Container>
  );
};
