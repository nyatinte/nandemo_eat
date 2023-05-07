import { useAtom } from "jotai";
import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo } from "react";

import { sectionAtom } from "@/atoms/sectionAtom";
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
      <Section />
    </>
  );
};

export default Home;
