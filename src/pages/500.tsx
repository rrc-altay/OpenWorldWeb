import React from "react";
import ErrorIcon from "@/assets/icons/505.svg";
import { useRouter } from "next/router";
import TitleLayout from "@/layout/TitleLayout";
import ErrorContent from "@/components/ErrorContent/ErrorContent";

const Index = () => {
  const router = useRouter();

  return (
    <TitleLayout title="500">
      <ErrorContent
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
    </TitleLayout>
  );
};

export default React.memo(Index);
