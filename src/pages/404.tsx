import React from "react";
import NotFoundIcon from "@/assets/icons/404.svg";
import { useRouter } from "next/router";
import TitleLayout from "@/layout/TitleLayout";
import ErrorContent from "@/components/ErrorContent/ErrorContent";
import { RoutesNamespaceRU } from "@/lib/constants/routesNamespace";

const Index = () => {
  const router = useRouter();

  return (
    <TitleLayout title={RoutesNamespaceRU.NOT_FOUND}>
      <ErrorContent
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
    </TitleLayout>
  );
};

export default React.memo(Index);
