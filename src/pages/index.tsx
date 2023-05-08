import { motion } from "framer-motion";
import { useAtom, useSetAtom } from "jotai";
import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import { choiceAtom } from "@/atoms/choiceAtom";
import { type Section, sectionAtom } from "@/atoms/sectionAtom";
import {
  HeroSection,
  CategorySection,
  SubCategorySection,
  DishSection,
  DoneSection,
} from "@/features/Home/Section";

const Home: NextPage = () => {
  const [sectionIndex, setSection] = useAtom(sectionAtom);
  const setChoice = useSetAtom(choiceAtom);

  const Section = useMemo(() => {
    switch (sectionIndex) {
      case "hero":
        return HeroSection;
      case "category":
        return CategorySection;
      case "subCategory":
        return SubCategorySection;
      case "dish":
        return DishSection;
      case "done":
        return DoneSection;
      default:
        return HeroSection;
    }
  }, [sectionIndex]);

  useEffect(() => {
    setChoice({
      category: "",
      subCategory: "",
      dish: "",
    });
    setSection("hero");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const SectionStep = useMemo(() => {
    const steps: Section[] = ["category", "subCategory", "dish", "done"];
    const index = steps.findIndex((step) => step === sectionIndex);
    return (
      <motion.ul
        className="steps"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <li className="step-primary step">カテゴリ</li>
        <li className={twMerge("step", index >= 1 && "step-primary")}>
          サブカテゴリ
        </li>
        <li className={twMerge("step", index >= 2 && "step-primary")}>料理</li>
        <li
          data-content="★"
          className={twMerge("step", sectionIndex === "done" && "step-primary")}
        />
      </motion.ul>
    );
  }, [sectionIndex]);

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
      {sectionIndex !== "hero" && (
        <div className="grid place-content-center px-4 py-2">{SectionStep}</div>
      )}
      <Section />
    </>
  );
};

export default Home;
