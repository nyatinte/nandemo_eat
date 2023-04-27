import { RottleIn } from "@/components/Elements";
import { LoadingPage } from "@/components/Layout/LoadingPage";

import { DishCreateForm } from "@/features/Dish/DishCreateForm";
import { api } from "@/utils/api";
import { type NextPage } from "next";

const Dish: NextPage = () => {
  const { data, isError } = api.dish.getAll.useQuery();
  if (isError) {
    return <div>error</div>;
  }
  if (!data) {
    return <LoadingPage />;
  }

  return (
    <div className="container flex flex-wrap justify-center gap-8 p-4">
      {data.map((dish, i) => (
        <RottleIn delay={i} key={dish.id} className="rounded-3xl">
          {dish.name}
        </RottleIn>
      ))}
      <DishCreateForm />
    </div>
  );
};

export default Dish;
