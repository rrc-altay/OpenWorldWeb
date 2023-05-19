import React from "react";
import AppLayout from "@/layout/AppLayout/AppLayout";
import HTMLLayout from "@/layout/Default/HTMLLayout";

import type { AppProps } from "next/app";
import "normalize.css";
import "@/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HTMLLayout>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </HTMLLayout>
  );
}

// "next/core-web-vitals"
