import React from "react";
import { Children } from "@/types/types";
import Head from "next/head";

const HeadLayout = ({ children }: Children) => {
  return (
    <>
      <Head>
        <title>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          БУ РА "РРЦ ДЛЯ ДЕТЕЙ И ПОДРОСТКОВ С ОГРАНИЧЕННЫМИ ВОЗМОЖНОСТЯМИ"
        </title>
        <meta
          name="description"
          content={`БУ РА "РРЦ ДЛЯ ДЕТЕЙ И ПОДРОСТКОВ С ОГРАНИЧЕННЫМИ ВОЗМОЖНОСТЯМИ"`}
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      {children}
      <script
        defer
        crossOrigin={undefined}
        src="https://lidrekon.ru/slep/js/jquery.js"
      />
      <script
        defer
        crossOrigin={undefined}
        src="https://lidrekon.ru/slep/js/uhpv-full.min.js"
      />
    </>
  );
};

export default React.memo(HeadLayout);
