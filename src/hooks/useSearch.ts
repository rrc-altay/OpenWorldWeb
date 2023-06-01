import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RoutesNamespace } from "@/lib/constants/routesNamespace";

export const useSearch = (initialValue = "") => {
  const [value, setValue] = useState<string>(initialValue);

  const { push } = useRouter();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handlePush = (isClear = true) => {
    push({
      pathname: RoutesNamespace.SEARCH,
      query: { find: value },
    }).finally(() => {
      if (isClear) {
        setValue("");
      }
    });
  };

  const handleSubmit = (isClear: boolean) => {
    return (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handlePush(isClear);
    };
  };

  useEffect(() => {
    if (initialValue !== value) {
      setValue(initialValue);
    }
  }, [initialValue]);

  return {
    value,
    handleSubmit,
    handleChangeValue,
  };
};
