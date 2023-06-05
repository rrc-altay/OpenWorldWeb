import React, { useState } from "react";
import { Children } from "@/types/types";
import { WORKER_URL } from "@/lib/constants";
import { Worker } from "@react-pdf-viewer/core";
import { LocalizationContext, LocalizationMap } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/print/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

import ru_RU from "../../public/assets/language/pdf/ru-RU.json";

const PdfLayout = ({ children }: Children) => {
  const [l10n, setL10n] = useState(ru_RU as never as LocalizationMap);
  const localizationContext = { l10n, setL10n };

  return (
    <Worker workerUrl={WORKER_URL}>
      <LocalizationContext.Provider value={localizationContext}>
        {children}
      </LocalizationContext.Provider>
    </Worker>
  );
};

export default React.memo(PdfLayout);
