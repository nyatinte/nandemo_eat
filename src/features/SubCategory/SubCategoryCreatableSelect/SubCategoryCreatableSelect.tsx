import { type SelectOptions } from "@/types/SelectOption";
import { api } from "@/utils/api";
import { useCallback, type FC, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import CreatableSelect from "react-select/creatable";

/**
 * SubCategoryCreatableSelect
 */
export const SubCategoryCreatableSelect: FC = () => {
  const { data, isError } = api.subCategory.getAll.useQuery();
  const { mutate, isLoading } = api.subCategory.create.useMutation();
  const [value, setValue] = useState<SelectOptions | null>();

  const ctx = api.useContext();
  const handleCreate = useCallback(
    (name: string) => {
      if (isLoading) return;
      setValue((prev) => {
        if (!prev) return [{ label: name, value: name }];
        return [...prev, { label: name, value: name }];
      });
      mutate(
        { name },
        {
          onSuccess: (data) => {
            setValue((prev) => {
              if (!prev) return null;
              const newOptions = prev.filter((option) => option.value !== name);
              newOptions.push({ label: data.name, value: data.id });
              return newOptions;
            });
            toast.success(data.name + "を追加しました");
            void ctx.subCategory.getAll.invalidate();
          },
          onError: (error) => {
            toast.error(error.message);
            setValue((prev) => {
              if (!prev) return null;
              return prev.filter((option) => option.value !== name);
            });
          },
        }
      );
    },
    [isLoading, mutate, ctx.subCategory.getAll]
  );

  useEffect(() => {
    console.log("value", value);
  }, [value]);

  if (isError) return null;
  if (!data) return <CreatableSelect placeholder="Loading..." isDisabled />;

  const options: SelectOptions = data.map((subCategory) => ({
    label: subCategory.name,
    value: subCategory.id,
  }));
  return (
    <CreatableSelect
      isMulti
      options={options}
      value={value}
      onChange={(newValue) => setValue(newValue)}
      onCreateOption={handleCreate}
      formatCreateLabel={(inputValue) => `「${inputValue}」を追加`}
      placeholder="サブカテゴリを選択してください"
    />
  );
};
