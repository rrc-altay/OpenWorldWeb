import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RoutesNamespace } from "@/lib/constants/routesNamespace";

export const useSearch = (initialValue = "") => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handlePush = () => {
    window.location.replace(`${RoutesNamespace.SEARCH}?find=${value}`);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePush();
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
