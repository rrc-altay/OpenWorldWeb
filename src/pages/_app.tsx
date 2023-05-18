import React from "react";
import MainLayout from "@/layout/MainLayout";
import type { AppProps } from "next/app";

import "normalize.css";
import "@/styles/globalStyles";
import HTMLLayout from "@/layout/Default/HTMLLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HTMLLayout>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </HTMLLayout>
  );
}

// "next/core-web-vitals"
