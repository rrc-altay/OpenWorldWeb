import React from "react";
import { PartnersModel } from "@/lib/models/Catalog/properties/PartnersModel";
import { BASE_URL } from "@/lib/constants";
import { useAIPartnersStyles } from "@/components/Containers/AsideContainer/AsideItem/AIPartners/AIPartners.styles";

interface AIPartnersProps {
  partners: PartnersModel[];
}

const AIPartners = ({ partners }: AIPartnersProps) => {
  return (
    <ContainerSC>
      {partners.map(({ link, src }) => (
        <ItemSC key={link}>
          <LinkSC
            href={link || "#"}
            target={link ? "_blank" : ""}
            rel="noopener noreferrer">
            <ImgSC
              src={`${BASE_URL}/${src}`}
              alt="partners"
            />
          </LinkSC>
        </ItemSC>
      ))}
    </ContainerSC>
  );
};

const { ContainerSC, ItemSC, LinkSC, ImgSC } = useAIPartnersStyles();

export default React.memo(AIPartners);
