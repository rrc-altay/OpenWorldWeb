import React from "react";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";
import { usePdfStyles } from "@/components/Pdf/Pdf.styles";
import { usePdf } from "@/components/Pdf/usePdf";
import SpinnerUI from "@/UI/SpinnerUI/SpinnerUI";
import { BASE_URL } from "@/lib/constants";

const Pdf = ({ name, link, autoOpen }: ContentPdfModel) => {
  const { ref, isRender, isLoading, isVisible, handleChangeVisible } = usePdf({
    autoOpen,
  });

  const pdfLink = `${BASE_URL}${link}`;
  const viewLink = `https://docs.google.com/gview?url=${pdfLink}&embedded=true`;

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
            {isRender && (
              <iframe
                ref={ref}
                width="100%"
                height="100%"
                src={viewLink}
                frameBorder="0"
              />
            )}
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
