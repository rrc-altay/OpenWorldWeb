import React from "react";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";
import { usePdfStyles } from "@/components/Pdf/Pdf.styles";
import { usePdf } from "@/components/Pdf/usePdf";
import { BASE_URL } from "@/lib/constants";
import SpinnerUI from "@/UI/SpinnerUI/SpinnerUI";

const Pdf = ({ name, link, autoOpen }: ContentPdfModel) => {
  const { isVisible, handleChangeVisible } = usePdf(autoOpen);

  return (
    <ContainerSC>
      <TextSC>{name}</TextSC>
      <ButtonSC onClick={handleChangeVisible}>
        {isVisible ? "Скрыть документ" : "Показать документ"}
      </ButtonSC>
      <CollapseSC
        in={isVisible}
        visible={isVisible}>
        <PdfContainerSC>
          <PdfWrapperSC>
            <iframe
              width="100%"
              height="100%"
              src={`https://docs.google.com/viewer?url=${BASE_URL}${link}&embedded=true`}
              frameBorder="0"
            />
          </PdfWrapperSC>
          <LoadingSC>
            <SpinnerUI />
          </LoadingSC>
        </PdfContainerSC>
      </CollapseSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  TextSC,
  ButtonSC,
  CollapseSC,
  PdfContainerSC,
  PdfWrapperSC,
  LoadingSC,
} = usePdfStyles();

export default React.memo(Pdf);
