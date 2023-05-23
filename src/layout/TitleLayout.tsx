import React from "react";
import { Children } from "@/types/types";
import Head from "next/head";
import { headMock } from "@/lib/mock/headMock";

type TitleLayoutProps = {
  title: string;
} & Children;

const TitleLayout = ({ children, title = "" }: TitleLayoutProps) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${headMock.titleSmall} ${title}` : headMock.titleFull}
        </title>
      </Head>
      {children}
    </>
  );
};

export default React.memo(TitleLayout);
