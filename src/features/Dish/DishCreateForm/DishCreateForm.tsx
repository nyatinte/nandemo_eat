import { type FC } from "react";
import {
  type SubmitErrorHandler,
  type SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IngredientCreatableSelect } from "@/features/Ingredient";
import { api, type RouterInputs } from "@/utils/api";
import { CategoryCreatableSelect } from "@/features/Category";
import { SubCategoryCreatableSelect } from "@/features/SubCategory";
import { toast } from "react-hot-toast";
import {
  invalidMessage,
  minArrayLengthMessage,
  requiredMessage,
} from "@/utils/textFormat";
export const dishCreateFormSchema = z.object({
  name: z
    .string({
      required_error: requiredMessage("料理名"),
    })
    .min(1, requiredMessage("料理名")),
  ingredients: z
    .array(z.string({ invalid_type_error: invalidMessage("食材") }), {
      required_error: requiredMessage("食材"),
    })
    .min(1, minArrayLengthMessage("食材", 1)),
  category: z
    .string({
      required_error: requiredMessage("カテゴリ"),
    })
    .min(1, requiredMessage("カテゴリ")),
  subCategories: z
    .array(
      z.string({
        invalid_type_error: invalidMessage("サブカテゴリ"),
      }),
      {
        required_error: requiredMessage("サブカテゴリ"),
      }
    )
    .min(1, minArrayLengthMessage("サブカテゴリ", 1)),
} satisfies Record<keyof RouterInputs["dish"]["create"], z.ZodTypeAny>);
export type DishCreateFormFields = z.infer<typeof dishCreateFormSchema>;
/**
 * DishCreateForm
 */
export const DishCreateForm: FC = () => {
  const { mutate } = api.dish.create.useMutation();
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useForm<DishCreateFormFields>({
    resolver: zodResolver(dishCreateFormSchema),
  });

  const onSubmit: SubmitHandler<DishCreateFormFields> = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data.name + "を作成しました");
      },
    });
  };

  const onSubmitError: SubmitErrorHandler<DishCreateFormFields> = (
    errors,
    e
  ) => {
    console.log(getValues());
    console.error(errors);
    console.error(e);
    for (const error of Object.values(errors)) {
      if (error.message) toast.error(error.message);
    }
  };

  return (
    <form
      className="container flex flex-col gap-4 rounded-xl border bg-orange-50 p-4"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit, onSubmitError)}
    >
      <input
        className="input"
        type="text"
        placeholder="料理名"
        {...register("name")}
      />
      <IngredientCreatableSelect control={control} />
      <CategoryCreatableSelect control={control} />
      <SubCategoryCreatableSelect control={control} />
      <button className="btn" disabled={isSubmitting}>
        作成
      </button>
    </form>
  );
};
