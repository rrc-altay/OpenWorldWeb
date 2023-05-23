import React from "react";
import ErrorPage from "@/components/ErrorPage/ErrorPage";
import ErrorIcon from "@/assets/icons/505.svg";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  return (
    <ErrorPage
      Icon={ErrorIcon}
      title="500"
      subtitle="Кажется что-то пошло не так!"
      description="Мы уже устраняем неисправность, попробуйте обновить страницу через некоторое время.
      Приносим извинения за временные неудобства."
      button={{
        text: "Перезагрузить",
        onClick: () => router.reload(),
      }}
    />
  );
};

export default React.memo(Index);
