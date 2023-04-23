import { RottleIn } from "@/components/Elements";
import { LoadingPage } from "@/components/Layout/LoadingPage";
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
    <div className="container flex-wrap p-4">
      {data.map((dish, i) => (
        <RottleIn delay={i} key={dish.id}>
          {dish.name}
        </RottleIn>
      ))}
    </div>
  );
};

export default Dish;
