import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import { twMerge } from "tailwind-merge";

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

  const SectionStep = useMemo(() => {
    const steps: Section[] = ["category", "subCategory", "dish"];
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
      </motion.ul>
    );
  }, [sectionIndex]);

  useEffect(() => {
    setSection("hero");
  }, [setSection]);

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
