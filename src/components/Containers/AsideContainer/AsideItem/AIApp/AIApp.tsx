import React from "react";
import { AppModel } from "@/lib/models/Catalog/properties/AppModel";
import { aboutMock } from "@/lib/mock/aboutMock";
import { useBigTablet } from "@/hooks/useAdaptive";
import { useAIAppStyles } from "@/components/Containers/AsideContainer/AsideItem/AIApp/useAIApp.styles";
import { BASE_URL } from "@/lib/constants";

interface AIAppProps {
  app: AppModel;
}

const AIApp = ({ app }: AIAppProps) => {
  const isBigTablet = useBigTablet();

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
        {isBigTablet && <Link />}
        <ImgTextSC>{app.description}</ImgTextSC>
      </TopContainerSC>
      {!isBigTablet && <Link />}
      <DownloadButtonSC>
        <a
          href={aboutMock.downloadAppLink}
          download>
          Скачать
        </a>
      </DownloadButtonSC>
    </ContainerSC>
  );
};

const Link = () => (
  <LinkSC
    href={aboutMock.developerLink}
    target="_blank"
    rel="noreferrer noopener">
    {aboutMock.developer}
  </LinkSC>
);

const {
  ContainerSC,
  TopContainerSC,
  DownloadImgSC,
  ImgSC,
  ImgTextSC,
  DownloadButtonSC,
  LinkSC,
} = useAIAppStyles();

export default React.memo(AIApp);
