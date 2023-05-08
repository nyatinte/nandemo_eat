import { type NextPage } from "next";
import { NextSeo } from "next-seo";
import { toast } from "react-hot-toast";

import { Container } from "@/components/Layout/Container";
import { LoadingPage } from "@/components/Layout/LoadingPage";
import { DishCreateForm } from "@/features/Dish/DishCreateForm";
import { api } from "@/utils/api";

const Dish: NextPage = () => {
  const { data, isError } = api.dish.getAll.useQuery();
  if (isError) {
    toast.error("エラーが発生しました。再度お試しください。");
    return <LoadingPage />;
  }
  if (!data) {
    return <LoadingPage />;
  }

  return (
    <>
      <NextSeo title="料理を追加する | なんでもEAT" />
      <Container>
        <h1 className="px-4 py-2 text-lg font-bold">料理を追加する</h1>
        <p className="px-4 py-2 text-sm text-gray-500">
          サービス品質の向上のため、料理を追加してください。
        </p>
        <DishCreateForm />
      </Container>
    </>
  );
};

export default Dish;
