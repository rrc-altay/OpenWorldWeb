import React from "react";
import { NewsModel } from "@/lib/models/NewsModel";
import { BASE_URL } from "@/lib/constants";
import { useNewsItemStyles } from "@/components/News/NewsItem/NewsItem.styles";
import RusDateSSR from "@/components/RusDateSSR/RusDateSSR";
import { RoutesNamespace } from "@/lib/constants/routesNamespace";
import { bviSpeech } from "@/lib/constants/bvi";

const NewsItem = ({
  id,
  title,
  description,
  images,
  created_at,
}: NewsModel) => {
  const previewImage = images[0];

  return (
    <ContainerSC
      href={`${RoutesNamespace.NEWS}/${id}`}
      target="_blank">
      <MobileTitleSC>{title}</MobileTitleSC>
      <WrapperSC>
        {previewImage?.src && (
          <ImageSC
            src={`${BASE_URL}${previewImage.src}`}
            alt={`Превью фото новости ${title}`}
          />
        )}
        <TextContainerSC>
          <TitleSC {...bviSpeech}>{title}</TitleSC>
          <DescContainerSC>
            <DescriptionSC {...bviSpeech}>{description}</DescriptionSC>
          </DescContainerSC>
          {created_at && (
            <DateContainerSC>
              <RusDateSSR created_at={created_at} />
            </DateContainerSC>
          )}
        </TextContainerSC>
      </WrapperSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  WrapperSC,
  ImageSC,
  TextContainerSC,
  TitleSC,
  MobileTitleSC,
  DescContainerSC,
  DescriptionSC,
  DateContainerSC,
} = useNewsItemStyles();

export default React.memo(NewsItem);
