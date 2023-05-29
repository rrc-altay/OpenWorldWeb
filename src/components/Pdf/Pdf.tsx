import React from "react";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";
import { usePdfStyles } from "@/components/Pdf/Pdf.styles";
import { usePdf } from "@/components/Pdf/usePdf";

const Pdf = ({
  name = "Государственное (муниципальное) задание №2 на 2023 год и на плановый период 2024 и на 2025 годов.",
  link = "https://www.orimi.com/pdf-test.pdf",
  autoOpen,
}: ContentPdfModel) => {
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
        <FrameSC
          width="100px"
          height="100px"
          src={`https://docs.google.com/viewer?url=${link}&hl=ru&embedded=true`}
          frameBorder="0"
        />
      </CollapseSC>
    </ContainerSC>
  );
};

const { ContainerSC, TextSC, ButtonSC, CollapseSC, FrameSC } = usePdfStyles();

export default React.memo(Pdf);
