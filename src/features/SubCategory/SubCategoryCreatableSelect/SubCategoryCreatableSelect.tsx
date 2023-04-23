import { type DishCreateFormFields } from "@/features/Dish/DishCreateForm";
import { type SelectOptions } from "@/types/SelectOption";
import { api } from "@/utils/api";

import { type FC, useCallback } from "react";
import { type Control, useController } from "react-hook-form";
import toast from "react-hot-toast";
import CreatableSelect from "react-select/creatable";

type SubCategoryCreatableSelectProps = {
  control: Control<DishCreateFormFields>;
};

/**
 * SubCategoryCreatableSelect
 */
export const SubCategoryCreatableSelect: FC<
  SubCategoryCreatableSelectProps
> = ({ control }) => {
  const { field } = useController<DishCreateFormFields>({
    name: "subCategories",
    control,
  });

  const { data, isError } = api.subCategory.getAll.useQuery();
  const { mutate, isLoading } = api.subCategory.create.useMutation();
  const ctx = api.useContext();
  const handleCreate = useCallback(
    (name: string) => {
      if (isLoading) return;
      const prev = field.value;
      if (Array.isArray(prev)) {
        field.onChange([...prev, name]);
      } else {
        field.onChange([name]);
      }
      mutate(
        { name },
        {
          onSuccess: (data) => {
            toast.success(data.name + "を追加しました");
            void ctx.subCategory.getAll.invalidate();
          },
          onError: (error) => {
            if (Array.isArray(field.value)) {
              const filtered = field.value.filter((value) => value !== name);
              field.onChange(filtered);
            }
            toast.error(error.message);
          },
        }
      );
    },
    [isLoading, field, mutate, ctx.subCategory.getAll]
  );
  if (isError) return null;
  if (!data) return <CreatableSelect placeholder="Loading..." isDisabled />;

  const options: SelectOptions = data.map((subCategory) => ({
    label: subCategory.name,
    value: subCategory.name,
  }));

  return (
    <CreatableSelect
      isMulti
      closeMenuOnSelect={false}
      options={options}
      {...field}
      value={
        Array.isArray(field.value)
          ? field.value.map((value) => ({ label: value, value }))
          : []
      }
      onChange={(newValue: SelectOptions) =>
        field.onChange(newValue.map((option) => option.value))
      }
      onCreateOption={handleCreate}
      formatCreateLabel={(inputValue) => `「${inputValue}」を追加`}
      placeholder="サブカテゴリを選択してください"
    />
  );
};
