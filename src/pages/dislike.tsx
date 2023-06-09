import { SignInButton, useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { type NextPage } from "next";
import { NextSeo } from "next-seo";
import { useCallback, useEffect, useState } from "react";
import {
  type SubmitHandler,
  useForm,
  type SubmitErrorHandler,
} from "react-hook-form";
import { toast } from "react-hot-toast";
import CreatableSelect from "react-select/creatable";
import { z } from "zod";

import { LoadingSpinner } from "@/components/Elements";
import { XmarkIcon } from "@/components/Elements/Icon/XmarkIcon";
import { LoadingPage } from "@/components/Layout";
import { Container } from "@/components/Layout/Container";
import { type SelectOptions } from "@/types/SelectOption";
import { api } from "@/utils/api";

const schema = z.object({
  ingredients: z.array(z.string()),
});
const DislikePage: NextPage = () => {
  const user = useUser();
  const { data, isError } = api.ingredient.getAll.useQuery();
  const { mutate, isLoading } = api.ingredient.create.useMutation();
  const { data: dislike, isLoading: isDislikeLoading } =
    api.dislike.getAll.useQuery(undefined, {
      retry: (_count, error) => {
        if (error?.data?.code === "UNAUTHORIZED") {
          return false;
        }
        return true;
      },
    });
  const { mutate: dislikeMutate } = api.dislike.updateMany.useMutation();
  const ctx = api.useContext();

  const {
    setValue,
    getValues,
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    if (dislike) {
      reset({ ingredients: dislike.map((d) => d.ingredient.name) });
    }
  }, [dislike, reset, setValue]);

  const dislikeIngredients = watch("ingredients");
  const handleCreate = useCallback(
    (name: string) => {
      if (isLoading) return;
      mutate(
        { name },
        {
          onSuccess: (data) => {
            toast.success(data.name + "を追加しました");
            setValue("ingredients", getValues("ingredients").concat(data.name));
            void ctx.ingredient.getAll.invalidate();
          },
          onError: (error) => {
            toast.error(error.message);
          },
        }
      );
    },
    [isLoading, mutate, setValue, getValues, ctx.ingredient.getAll]
  );
  const [selectValue, setSelectValue] = useState<SelectOptions>([]);

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = useCallback(() => {
    dislikeMutate(
      { ingredients: dislikeIngredients },
      {
        onSuccess: () => {
          toast.success("更新しました");
        },
      }
    );
  }, [dislikeIngredients, dislikeMutate]);

  const onSubmitError: SubmitErrorHandler<z.infer<typeof schema>> =
    useCallback(() => {
      toast.error("エラーが発生しました");
    }, []);

  const handleClickDeleteBtn = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setValue(
        "ingredients",
        getValues("ingredients").filter(
          (ingredient) => ingredient !== e.currentTarget.name
        )
      );
    },
    [getValues, setValue]
  );
  if (isDislikeLoading) return <LoadingPage />;
  if (isError) return null;
  if (!data) return <CreatableSelect placeholder="Loading..." isDisabled />;

  const options: SelectOptions = data
    .map((ingredient) => ({
      label: ingredient.name,
      value: ingredient.name,
    }))
    .filter((ingredient) => !dislikeIngredients?.includes(ingredient.value));

  if (!user.isSignedIn) {
    return (
      <>
        <NextSeo title="苦手なものを登録する | なんでもEAT" />
        <Container>
          <p>
            苦手なもの登録機能を利用するためには
            <span className="font-bold">ログインが必要</span>
            です。お手持ちのGoogleアカウント、Lineアカウントなどで簡単にログインできます。
          </p>
          <SignInButton>
            <button className="btn-wide btn text-lg">ログインする</button>
          </SignInButton>
        </Container>
      </>
    );
  }
  return (
    <>
      <NextSeo title="苦手なものを登録する | なんでもEAT" />
      <Container>
        <h1 className="px-4 py-2 text-lg font-bold">苦手なもの登録</h1>
        <div className="flex items-start justify-center gap-4">
          {/* max-h-without-headerからp-8を引く */}
          <ul className="max-h-[calc(100vh-80px-32px)] divide-y divide-gray-200 overflow-y-auto rounded-sm bg-white">
            {dislikeIngredients?.map((ingredient) => (
              <li
                className="flex w-52 max-w-sm items-center justify-between p-4"
                key={ingredient}
              >
                <span className="text-lg">{ingredient}</span>
                <button
                  className="p-2"
                  onClick={handleClickDeleteBtn}
                  name={ingredient}
                >
                  <XmarkIcon />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex w-[45vw] flex-col justify-center gap-4 sm:w-auto">
            <CreatableSelect
              closeMenuOnSelect={false}
              options={options}
              onCreateOption={handleCreate}
              value={selectValue}
              onChange={(value) => {
                setSelectValue([]);
                if (value?.value === undefined) return;
                setValue(
                  "ingredients",
                  getValues("ingredients").concat(value?.value)
                );
              }}
              formatCreateLabel={(inputValue) => `「${inputValue}」を追加`}
              placeholder="食材を選択してください"
            />
            <button
              className="btn-primary btn w-full"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={handleSubmit(onSubmit, onSubmitError)}
            >
              {isSubmitting ? <LoadingSpinner /> : "更新"}
            </button>
            <button
              className="btn w-full"
              onClick={() =>
                reset({ ingredients: dislike?.map((d) => d.ingredient.name) })
              }
            >
              変更前に戻す
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DislikePage;
