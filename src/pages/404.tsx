import React from "react";
import ErrorPage from "@/components/ErrorPage/ErrorPage";
import NotFoundIcon from "@/assets/icons/404.svg";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  return (
    <ErrorPage
      Icon={NotFoundIcon}
      title="404"
      subtitle="Кажется что-то пошло не так!"
      description="Страница, которую вы запрашиваете, не существует.
      Возможно она устарела, была удалена, или был введен неверный
      адрес в адресной строке."
      button={{
        text: "Вернуться на главную",
        onClick: () => router.push("/"),
      }}
    />
  );
};

export default React.memo(Index);
