import { motion } from "framer-motion";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback, type FC } from "react";
import { toast } from "react-hot-toast";

import { choiceAtom, dishAtom } from "@/atoms/choiceAtom";
import { sectionAtom } from "@/atoms/sectionAtom";
import { RottleIn } from "@/components/Elements";
import { LoadingPage } from "@/components/Layout";
import { Container } from "@/components/Layout/Container";
import { api } from "@/utils/api";

/**
 * Dish section
 */
export const DishSection: FC = () => {
  const choice = useAtomValue(choiceAtom);
  const [chooseDish, setDish] = useAtom(dishAtom);
  const {
    data: dishs,
    isLoading,
    error,
  } = api.dish.getDishByChoice.useQuery(choice);

  const setSection = useSetAtom(sectionAtom);
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const chooseDish = e.currentTarget.id;
      setDish(chooseDish);
      setTimeout(() => {
        setSection("done");
      }, 1500);
    },
    [setDish, setSection]
  );

  if (isLoading) return <LoadingPage />;
  if (error) {
    toast.error("エラーが発生しました。再度お試しください。");
    setSection("hero");
    return <LoadingPage />;
  }
  if (dishs.length === 0) {
    toast.error("エラーが発生しました。再度お試しください。");
    setSection("hero");
    return <LoadingPage />;
  }

  const handleClickRandom = () => {
    if (!dishs) return;
    const randomDish = dishs[Math.floor(Math.random() * dishs.length)];
    if (!randomDish) return;
    setDish(randomDish.name);
    setTimeout(() => {
      setSection("done");
    }, 1500);
  };
  return (
    <Container>
      <motion.h1
        className="mb-10 mt-20 text-center text-2xl font-bold"
        animate={{ opacity: 1, transition: { delay: 1.5 } }}
      >
        料理を選んでください
      </motion.h1>
      <motion.div
        className="flex flex-wrap justify-center gap-4"
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
        {dishs?.map((dish, index) => (
          <RottleIn
            isDroped={chooseDish ? chooseDish !== dish.name : false}
            id={dish.name}
            key={dish.id}
            onClick={handleClick}
            delay={index * 0.5}
          >
            {dish.name}
          </RottleIn>
        ))}
      </motion.div>
      <div className="mt-4 flex justify-center">
        <button className="btn" type="button" onClick={handleClickRandom}>
          おまかせ
        </button>
      </div>
    </Container>
  );
};
