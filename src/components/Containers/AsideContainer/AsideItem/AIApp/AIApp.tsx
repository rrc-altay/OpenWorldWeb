import React from "react";
import { AppModel } from "@/lib/models/Catalog/properties/AppModel";
import { aboutMock } from "@/lib/mock/aboutMock";
import { useAIAppStyles } from "@/components/Containers/AsideContainer/AsideItem/AIApp/useAIApp.styles";
import { BASE_URL } from "@/lib/constants";
import { bviNoStyle } from "@/lib/constants/bvi";

interface AIAppProps {
  app: AppModel;
}

const linkProps = {
  href: aboutMock.developerLink,
  target: "_blank",
  rel: "noreferrer noopener",
};

const AIApp = ({ app }: AIAppProps) => {
  return (
    <ContainerSC>
      <TopContainerSC>
        <DownloadImgSC
          href={aboutMock.downloadAppLink}
          download>
          <ImgSC
            src={`${BASE_URL}${app.image}`}
            alt={app.description}
          />
        </DownloadImgSC>
        <LinkMobileSC {...linkProps}>{aboutMock.developer}</LinkMobileSC>
        <ImgTextSC>{app.description}</ImgTextSC>
      </TopContainerSC>
      <LinkSC {...linkProps}>{aboutMock.developer}</LinkSC>
      <DownloadButtonSC>
        <a
          {...bviNoStyle}
          href={aboutMock.downloadAppLink}
          download>
          Скачать
        </a>
      </DownloadButtonSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  TopContainerSC,
  DownloadImgSC,
  ImgSC,
  ImgTextSC,
  DownloadButtonSC,
  LinkSC,
  LinkMobileSC,
} = useAIAppStyles();

export default React.memo(AIApp);
