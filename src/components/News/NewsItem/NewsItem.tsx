import React, { useEffect, useState } from "react";
import { NewsModel } from "@/lib/models/NewsModel";
import { BASE_URL } from "@/lib/constants";
import { useNewsItemStyles } from "@/components/News/NewsItem/NewsItem.styles";
import { useSmallTablet } from "@/hooks/useAdaptive";
import { getRusDate } from "@/lib/services/services";

const NewsItem = ({
  id,
  title,
  description,
  images,
  created_at,
}: NewsModel) => {
  const [date, setDate] = useState<string>("");
  const previewImage = images[0];
  const isSmallTablet = useSmallTablet();

  useEffect(() => {
    if (created_at) {
      setDate(getRusDate(created_at));
    }
  }, [created_at]);

  return (
    <ContainerSC
      href={`/news/${id}`}
      target="_blank">
      {isSmallTablet && <TitleSC>{title}</TitleSC>}
      <WrapperSC>
        {previewImage?.src && (
          <ImageSC
            src={`${BASE_URL}${previewImage.src}`}
            alt={`Превью фото новости ${title}`}
          />
        )}
        <TextContainerSC>
          {!isSmallTablet && <TitleSC>{title}</TitleSC>}
          <DescContainerSC>
            <DescriptionSC>{description}</DescriptionSC>
          </DescContainerSC>
          {date && <DateSC>Опубликовано: {date}</DateSC>}
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
  DescContainerSC,
  DescriptionSC,
  DateSC,
} = useNewsItemStyles();

export default React.memo(NewsItem);
