import React from "react";
import { PartnersModel } from "@/lib/models/Catalog/properties/PartnersModel";
import { styled } from "@mui/material";

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
              src={src}
              alt="partners"
            />
          </LinkSC>
        </ItemSC>
      ))}
    </ContainerSC>
  );
};

const ContainerSC = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const ItemSC = styled("li")`
  width: 100%;
  height: 100%;

  max-width: 88px;
  max-height: 88px;

  overflow: hidden;
`;

const LinkSC = styled("a")`
  display: block;
  width: inherit;
  height: inherit;
`;
const ImgSC = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default React.memo(AIPartners);
