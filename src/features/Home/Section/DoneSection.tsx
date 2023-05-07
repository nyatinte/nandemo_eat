import { motion } from "framer-motion";
import { useAtomValue, useSetAtom } from "jotai";
import { type FC } from "react";

import { dishAtom } from "@/atoms/choiceAtom";
import { sectionAtom } from "@/atoms/sectionAtom";
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
        className="mt-20 flex flex-wrap justify-center gap-4"
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
          あなたの選んだ料理は{dish}です！早速食べに行きましょう！
        </h1>
        <button className="btn mx-auto" onClick={handleClick}>
          最初から
        </button>
      </motion.div>
    </Container>
  );
};
