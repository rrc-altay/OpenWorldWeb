import React from "react";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";
import { usePdfStyles } from "@/components/Pdf/Pdf.styles";
import { usePdf } from "@/components/Pdf/usePdf";
import { BASE_URL } from "@/lib/constants";
import PdfFrame from "@/components/Pdf/PdfFrame/PdfFrame";
import SpinnerUI from "@/UI/SpinnerUI/SpinnerUI";

const Pdf = ({ name, link, autoOpen }: ContentPdfModel) => {
  const { isVisible, isLoading, handleChangeVisible } = usePdf({
    autoOpen,
  });

  const pdfLink = `${BASE_URL}${link}`;

  return (
    <ContainerSC>
      <TextSC>{name}</TextSC>
      <ButtonContainerSC>
        <ButtonSC onClick={handleChangeVisible}>
          {isVisible ? "Скрыть документ" : "Показать документ"}
        </ButtonSC>
        <ButtonSC>
          <a
            href={pdfLink}
            download={true}>
            Скачать документ
          </a>
        </ButtonSC>
      </ButtonContainerSC>
      <CollapseSC
        in={isVisible}
        visible={isVisible}>
        <PdfContainerSC>
          <PdfWrapperSC>
            <PdfFrame src={pdfLink} />
          </PdfWrapperSC>
          {isLoading && (
            <LoadingSC>
              <SpinnerUI />
            </LoadingSC>
          )}
        </PdfContainerSC>
      </CollapseSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  TextSC,
  ButtonContainerSC,
  ButtonSC,
  CollapseSC,
  PdfContainerSC,
  PdfWrapperSC,
  LoadingSC,
} = usePdfStyles();

export default React.memo(Pdf);
