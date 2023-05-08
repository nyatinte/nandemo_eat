import { motion } from "framer-motion";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback, type FC, useEffect } from "react";
import { toast } from "react-hot-toast";

import { categoryAtom, subCategoryAtom } from "@/atoms/choiceAtom";
import { sectionAtom } from "@/atoms/sectionAtom";
import { RottleIn } from "@/components/Elements";
import { LoadingPage } from "@/components/Layout";
import { Container } from "@/components/Layout/Container";
import { api } from "@/utils/api";

/**
 * SubCategory section
 */
export const SubCategorySection: FC = () => {
  const category = useAtomValue(categoryAtom);
  const {
    data: subCategories,
    isLoading,
    error,
  } = api.subCategory.getRandomByCategory.useQuery({
    category,
  });

  const [choice, setChoice] = useAtom(subCategoryAtom);
  useEffect(() => {
    setChoice("");
  }, [setChoice]);

  const setSection = useSetAtom(sectionAtom);
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const chooseSubCategory = e.currentTarget.id;
      setChoice(chooseSubCategory);

      setTimeout(() => {
        setSection("dish");
      }, 1500);
    },
    [setChoice, setSection]
  );

  if (isLoading) return <LoadingPage />;
  if (error) {
    toast.error("エラーが発生しました。再度お試しください。");
  }
  return (
    <Container>
      <motion.h1
        className="mb-10 mt-20 text-center text-2xl font-bold"
        animate={{ opacity: 1, transition: { delay: 1.5 } }}
      >
        サブカテゴリを選択しましょう
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
        {subCategories?.map((subCategory, index) => (
          <RottleIn
            isDroped={choice ? choice !== subCategory.name : false}
            id={subCategory.name}
            hidden={choice !== subCategory.name}
            key={subCategory.id}
            onClick={handleClick}
            delay={index * 0.5}
            role="button"
            tabIndex={0}
          >
            {subCategory.name}
          </RottleIn>
        ))}
      </motion.div>
    </Container>
  );
};
