import React from "react";
import { AppModel } from "@/lib/models/Catalog/properties/AppModel";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { about } from "@/lib/mock/about";
import { Breakpoints } from "@/styles/breakpoints";

interface AIAppProps {
  app: AppModel;
}

const AIApp = ({ app }: AIAppProps) => {
  return (
    <ContainerSC>
      <TopContainerSC>
        <ImgSC
          src={app.image}
          alt={app.description}
        />
        <ImgTextSC>{app.description}</ImgTextSC>
      </TopContainerSC>
      <LinkSC
        href={about.developerLink}
        target="_blank"
        rel="noreferrer noopener">
        {about.developer}
      </LinkSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")``;

const TopContainerSC = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ImgSC = styled("img")`
  width: 81px;
  height: 81px;
  margin-right: 14px;
`;

const ImgTextSC = styled("p")`
  width: 200px;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: ${ColorScheme.GRAY_LIGHT};

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    width: 160px;
  }
`;

const LinkSC = styled("a")`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${ColorScheme.SECONDARY_LIGHT};
`;

export default React.memo(AIApp);
