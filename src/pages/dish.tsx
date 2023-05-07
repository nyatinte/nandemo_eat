import { type NextPage } from "next";
import Head from "next/head";

import { Container } from "@/components/Layout/Container";
import { LoadingPage } from "@/components/Layout/LoadingPage";
import { DishCreateForm } from "@/features/Dish/DishCreateForm";
import { api } from "@/utils/api";

const Dish: NextPage = () => {
  const { data, isError } = api.dish.getAll.useQuery();
  if (isError) {
    return <div>error</div>;
  }
  if (!data) {
    return <LoadingPage />;
  }

  return (
    <>
      <Head>
        <title>料理を追加する | なんでもEAT</title>
        <meta name="description" content="料理を追加する" />
      </Head>
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
