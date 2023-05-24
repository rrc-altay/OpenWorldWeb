import React from "react";
import { NewsModel } from "@/lib/models/NewsModel";
import { BASE_URL_PROD } from "@/lib/constants";
import { useNewsItemStyles } from "@/components/News/NewsItem/NewsItem.styles";

const NewsItem = ({ id, title, description, images }: NewsModel) => {
  const previewImage = images[0];

  return (
    <ContainerSC>
      {previewImage?.src && (
        <ImageSC
          src={`${BASE_URL_PROD}${previewImage.src}`}
          alt={`Превью фото новости ${title}`}
        />
      )}
      <TextContainerSC>
        <TitleSC
          href={`/news/${id}`}
          target="_blank"
          rel="noopener noreferrer">
          {title}
        </TitleSC>
        <DescriptionSC>{description}</DescriptionSC>
        <DateSC>Опубликовано: 20 Апр, 2023</DateSC>
      </TextContainerSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  ImageSC,
  TextContainerSC,
  TitleSC,
  DescriptionSC,
  DateSC,
} = useNewsItemStyles();

export default React.memo(NewsItem);
