import { type SelectOption, type SelectOptions } from "@/types/SelectOption";
import { api } from "@/utils/api";
import { useCallback, type FC, useState } from "react";
import { toast } from "react-hot-toast";

import CreatableSelect from "react-select/creatable";

/**
 * categoryCreatableSelect
 */
export const CategoryCreatableSelect: FC = () => {
  const { data, isError } = api.category.getAll.useQuery();
  const { mutate, isLoading } = api.category.create.useMutation();
  const [value, setValue] = useState<SelectOption | null>();

  const ctx = api.useContext();
  const handleCreate = useCallback(
    (name: string) => {
      if (isLoading) return;
      setValue({ label: name, value: name });
      mutate(
        { name },
        {
          onSuccess: (data) => {
            setValue({ label: data.name, value: data.id });
            toast.success(data.name + "を追加しました");
            void ctx.category.getAll.invalidate();
          },
          onError: (error) => {
            toast.error(error.message);
            setValue(null);
          },
        }
      );
    },
    [isLoading, mutate, ctx.category.getAll]
  );

  if (isError) return null;
  if (!data) return <CreatableSelect placeholder="Loading..." isDisabled />;

  const options: SelectOptions = data.map((category) => ({
    label: category.name,
    value: category.id,
  }));
  return (
    <CreatableSelect
      options={options}
      value={value}
      onChange={(newValue) => setValue(newValue)}
      onCreateOption={handleCreate}
      formatCreateLabel={(inputValue) => `「${inputValue}」を追加`}
      placeholder="カテゴリを選択してください"
    />
  );
};
