import React from "react";
import { Children } from "@/types/types";
import Head from "next/head";

type TitleLayoutProps = {
  title: string;
} & Children;

const TitleLayout = ({ children, title }: TitleLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default React.memo(TitleLayout);
