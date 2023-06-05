import React from "react";
import { Children } from "@/types/types";
import { WORKER_URL } from "@/lib/constants";
import { Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/print/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

const PdfLayout = ({ children }: Children) => {
  return <Worker workerUrl={WORKER_URL}>{children}</Worker>;
};

export default React.memo(PdfLayout);
