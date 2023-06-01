import React from "react";
import AppLayout from "@/layout/AppLayout/AppLayout";
import HTMLLayout from "@/layout/Default/HTMLLayout";
import ErrorBoundary from "@/layout/ErrorBoundary";

import type { AppProps } from "next/app";
import "normalize.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HTMLLayout>
      <AppLayout>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </AppLayout>
    </HTMLLayout>
  );
}

// "next/core-web-vitals"
