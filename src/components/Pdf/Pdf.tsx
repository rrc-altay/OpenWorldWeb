import React from "react";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";
import { usePdfStyles } from "@/components/Pdf/Pdf.styles";
import { usePdf } from "@/components/Pdf/usePdf";
import { BASE_URL } from "@/lib/constants";
import PdfFrame from "@/components/Pdf/PdfFrame/PdfFrame";
import { bviHide, bviNoStyle } from "@/lib/constants/bvi";

const Pdf = ({ name, link, autoOpen }: ContentPdfModel) => {
  const { isVisible, handleChangeVisible } = usePdf({
    autoOpen,
  });

  const pdfLink = `${BASE_URL}${link}`;

  return (
    <ContainerSC>
      <TextSC>{name}</TextSC>
      <ButtonContainerSC>
        <ButtonSC
          onClick={handleChangeVisible}
          {...bviHide}>
          {isVisible ? "Скрыть документ" : "Показать документ"}
        </ButtonSC>
        <ButtonSC>
          <a
            {...bviNoStyle}
            href={pdfLink}
            download={true}>
            Скачать документ
          </a>
        </ButtonSC>
      </ButtonContainerSC>
      <CollapseSC
        in={isVisible}
        visible={isVisible}
        {...bviHide}>
        <PdfContainerSC>
          <PdfWrapperSC>
            <PdfFrame src={pdfLink} />
          </PdfWrapperSC>
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
} = usePdfStyles();

export default React.memo(Pdf);
