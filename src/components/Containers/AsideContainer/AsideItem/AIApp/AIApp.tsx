import React from "react";
import { AppModel } from "@/lib/models/Catalog/properties/AppModel";
import { about } from "@/lib/mock/about";
import { useBigTablet } from "@/hooks/useAdaptive";
import { useAIAppStyles } from "@/components/Containers/AsideContainer/AsideItem/AIApp/useAIApp.styles";

interface AIAppProps {
  app: AppModel;
}

const AIApp = ({ app }: AIAppProps) => {
  const isBigTablet = useBigTablet();

  return (
    <ContainerSC>
      <TopContainerSC>
        <DownloadImgSC
          href={about.downloadAppLink}
          download>
          <ImgSC
            src={app.image}
            alt={app.description}
          />
        </DownloadImgSC>
        {isBigTablet && <Link />}
        <ImgTextSC>{app.description}</ImgTextSC>
      </TopContainerSC>
      {!isBigTablet && <Link />}
      <DownloadButtonSC>
        <a
          href={about.downloadAppLink}
          download>
          Скачать
        </a>
      </DownloadButtonSC>
    </ContainerSC>
  );
};

const Link = () => (
  <LinkSC
    href={about.developerLink}
    target="_blank"
    rel="noreferrer noopener">
    {about.developer}
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
