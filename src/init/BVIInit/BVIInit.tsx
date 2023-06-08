import React from "react";
import Script from "next/script";
import Head from "next/head";
import { BVI_CONFIG, BVI_SETTINGS } from "./constants";

const BVIInit = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={BVI_SETTINGS.CSS}
          type="text/css"
        />
      </Head>
      <Script
        defer
        strategy="afterInteractive"
        src={BVI_SETTINGS.JS}
        onLoad={() => {
          new window.isvek.Bvi(BVI_CONFIG);
          document.body.style.opacity = "1";
        }}
        onError={() => {
          document.body.style.opacity = "1";
        }}
      />
    </>
  );
};

export default React.memo(BVIInit);
