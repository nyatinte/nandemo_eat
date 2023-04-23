import { type DishCreateFormFields } from "@/features/Dish/DishCreateForm";
import { type SelectOptions } from "@/types/SelectOption";
import { api } from "@/utils/api";

import { type FC, useCallback } from "react";
import { type Control, useController } from "react-hook-form";
import toast from "react-hot-toast";
import CreatableSelect from "react-select/creatable";

type IngredientCreatableSelectProps = {
  control: Control<DishCreateFormFields>;
};

/**
 * IngredientCreatableSelect
 */
export const IngredientCreatableSelect: FC<IngredientCreatableSelectProps> = ({
  control,
}) => {
  const { field } = useController<DishCreateFormFields>({
    name: "ingredients",
    control,
  });

  const { data, isError } = api.ingredient.getAll.useQuery();
  const { mutate, isLoading } = api.ingredient.create.useMutation();
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
            void ctx.ingredient.getAll.invalidate();
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
    [isLoading, field, mutate, ctx.ingredient.getAll]
  );
  if (isError) return null;
  if (!data) return <CreatableSelect placeholder="Loading..." isDisabled />;

  const options: SelectOptions = data.map((ingredient) => ({
    label: ingredient.name,
    value: ingredient.name,
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
      placeholder="食材を選択してください"
    />
  );
};
