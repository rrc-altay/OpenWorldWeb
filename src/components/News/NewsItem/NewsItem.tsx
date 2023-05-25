import React, { useEffect, useState } from "react";
import { NewsModel } from "@/lib/models/NewsModel";
import { BASE_URL_PROD } from "@/lib/constants";
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

  const Title = () => (
    <TitleSC
      href={`/news/${id}`}
      target="_blank"
      rel="noopener noreferrer">
      {title}
    </TitleSC>
  );

  return (
    <ContainerSC>
      {isSmallTablet && <Title />}
      <WrapperSC>
        {previewImage?.src && (
          <ImageSC
            src={`${BASE_URL_PROD}${previewImage.src}`}
            alt={`Превью фото новости ${title}`}
          />
        )}
        <TextContainerSC>
          {!isSmallTablet && <Title />}
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
