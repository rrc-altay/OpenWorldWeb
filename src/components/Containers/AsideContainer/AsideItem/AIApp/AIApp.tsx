import React from "react";
import { AppModel } from "@/lib/models/Catalog/properties/AppModel";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { about } from "@/lib/mock/about";

interface AIAppProps {
  app: AppModel;
}

const AIApp = ({ app }: AIAppProps) => {
  return (
    <ContainerSC>
      <TopContainerSC>
        <DownloadImgSC
          href="https://1openworld.ru/media/build/file/app-release.apk  "
          download>
          <ImgSC
            src={app.image}
            alt={app.description}
          />
        </DownloadImgSC>
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

const DownloadImgSC = styled("a")`
  display: block;

  width: 81px;
  height: 81px;
  margin-right: 14px;
  flex-shrink: 0;
`;

const ImgSC = styled("img")`
  width: 100%;
  height: 100%;
`;

const ImgTextSC = styled("p")`
  width: 100%;
  max-width: 195px;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: ${ColorScheme.GRAY_LIGHT};
`;

const LinkSC = styled("a")`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: ${ColorScheme.SECONDARY_LIGHT};
  transition: 0.2s all linear;

  &:hover {
    color: ${ColorScheme.SECONDARY_DARK};
  }
`;

export default React.memo(AIApp);
