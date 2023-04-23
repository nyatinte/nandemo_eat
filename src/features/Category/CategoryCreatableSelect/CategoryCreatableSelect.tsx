import { type DishCreateFormFields } from "@/features/Dish/DishCreateForm";
import { type SelectOption, type SelectOptions } from "@/types/SelectOption";
import { api } from "@/utils/api";
import { useCallback, type FC } from "react";
import { type Control, useController } from "react-hook-form";
import { toast } from "react-hot-toast";

import CreatableSelect from "react-select/creatable";

type CategoryCreatableSelectProps = {
  control: Control<DishCreateFormFields>;
};
/**
 * categoryCreatableSelect
 */
export const CategoryCreatableSelect: FC<CategoryCreatableSelectProps> = ({
  control,
}) => {
  const { field } = useController<DishCreateFormFields>({
    name: "category",
    control,
  });
  const { data, isError } = api.category.getAll.useQuery();
  const { mutate, isLoading } = api.category.create.useMutation();

  const ctx = api.useContext();
  const handleCreate = useCallback(
    (name: string) => {
      if (isLoading) return;
      field.onChange(name);
      mutate(
        { name },
        {
          onSuccess: (data) => {
            toast.success(data.name + "を追加しました");
            void ctx.category.getAll.invalidate();
          },
          onError: (error) => {
            field.onChange("");
            toast.error(error.message);
          },
        }
      );
    },
    [isLoading, field, mutate, ctx.category.getAll]
  );

  if (isError) return null;
  if (!data) return <CreatableSelect placeholder="Loading..." isDisabled />;

  const options: SelectOptions = data.map((category) => ({
    label: category.name,
    value: category.name,
  }));

  return (
    <CreatableSelect
      options={options}
      {...field}
      value={{
        label: field.value,
        value: field.value,
      }}
      onChange={(newValue: SelectOption) => field.onChange(newValue.value)}
      onCreateOption={handleCreate}
      formatCreateLabel={(inputValue) => `「${inputValue}」を追加`}
      placeholder="カテゴリを選択してください"
    />
  );
};
