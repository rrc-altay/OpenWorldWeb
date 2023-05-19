import React from "react";
import AppLayout from "@/layout/AppLayout/AppLayout";
import type { AppProps } from "next/app";

import "normalize.css";
import "@/styles/globalStyles";
import HTMLLayout from "@/layout/Default/HTMLLayout";

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
