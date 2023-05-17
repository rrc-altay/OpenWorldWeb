import React from "react";
import MainLayout from "@/layout/MainLayout";
import type { AppProps } from "next/app";

import "normalize.css";
import "@/styles/globalStyles";
import HeadLayout from "@/layout/HeadLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeadLayout>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </HeadLayout>
  );
}

// "next/core-web-vitals"
