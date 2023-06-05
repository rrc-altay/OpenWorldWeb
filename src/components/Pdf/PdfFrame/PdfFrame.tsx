import React, { useState } from "react";
import { DocumentLoadEvent, Viewer } from "@react-pdf-viewer/core";

type PdfFrameProps = {
  src: string;
};

import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { printPlugin } from "@react-pdf-viewer/print";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

const PdfFrame = ({ src }: PdfFrameProps) => {
  const [document, setDocument] = useState<DocumentLoadEvent | null>(null);

  const zoomPluginInstance = zoomPlugin();
  const printPluginInstance = printPlugin();
  const getFilePluginInstance = getFilePlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();

  const { ZoomIn, ZoomOut } = zoomPluginInstance;
  const { Print } = printPluginInstance;
  const { Download } = getFilePluginInstance;
  const { CurrentPageLabel, NumberOfPages } = pageNavigationPluginInstance;

  return (
    <>
      {document?.doc.numPages && (
        <ControlButtonSC>
          <ControlButtonSC>
            <ZoomIn />
            <ZoomOut />
          </ControlButtonSC>
          <ControlButtonSC>
            <CurrentPageLabel /> /
            <NumberOfPages />
          </ControlButtonSC>
          <ControlButtonSC>
            <Download />
            <Print />
          </ControlButtonSC>
        </ControlButtonSC>
      )}
      <ViewContainerSC>
        <Viewer
          fileUrl={src}
          onDocumentLoad={(e) => setDocument(e)}
          plugins={[
            zoomPluginInstance,
            printPluginInstance,
            getFilePluginInstance,
            pageNavigationPluginInstance,
          ]}
          theme="dark"
        />
      </ViewContainerSC>
    </>
  );
};

const ControlButtonSC = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #1a1a1a;
  color: ${ColorScheme.MAIN};

  & > * > * {
    color: inherit !important;
  }
`;

const ViewContainerSC = styled("div")`
  height: calc(100% - 32px);
`;

export default React.memo(PdfFrame);
