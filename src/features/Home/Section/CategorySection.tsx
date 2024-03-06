import { motion } from "framer-motion";
import { useAtom, useSetAtom } from "jotai";
import { useCallback, type FC, useEffect } from "react";
import { toast } from "react-hot-toast";

import { categoryAtom } from "@/atoms/choiceAtom";
import { sectionAtom } from "@/atoms/sectionAtom";
import { RottleIn } from "@/components/Elements";
import { LoadingPage } from "@/components/Layout";
import { Container } from "@/components/Layout/Container";
import { api } from "@/utils/api";

/**
 * Category section
 */
export const CategorySection: FC = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = api.category.getRandom.useQuery();
  const [choice, setChoice] = useAtom(categoryAtom);
  useEffect(() => {
    setChoice("");
    return () => {
      setChoice("");
    };
  }, [setChoice]);

  const setSection = useSetAtom(sectionAtom);
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const chooseCategory = e.currentTarget.id;
      setChoice(chooseCategory);

      setTimeout(() => {
        setSection("subCategory");
      }, 1500);
    },
    [setChoice, setSection]
  );

  if (isLoading) return <LoadingPage />;
  if (error) {
    toast.error("エラーが発生しました。再度お試しください。");
    toast.error(
      "データベースが動作していません。管理者にお問い合わせください。"
    );
  }
  return (
    <Container>
      <motion.h1
        className="mb-10 mt-20 text-center text-2xl font-bold"
        animate={{ opacity: 1, transition: { delay: 1.5 } }}
      >
        カテゴリを選択しましょう
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
        {categories?.map((category, index) => (
          <RottleIn
            isDroped={choice ? choice !== category.name : false}
            id={category.name}
            hidden={choice !== category.name}
            key={category.id}
            onClick={handleClick}
            delay={index * 0.5}
            tabIndex={0}
            role="button"
          >
            {category.name}
          </RottleIn>
        ))}
      </motion.div>
    </Container>
  );
};
