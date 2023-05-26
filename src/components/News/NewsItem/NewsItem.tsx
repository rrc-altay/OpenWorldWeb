import React from "react";
import { NewsModel } from "@/lib/models/NewsModel";
import { BASE_URL } from "@/lib/constants";
import { useNewsItemStyles } from "@/components/News/NewsItem/NewsItem.styles";
import { useSmallTablet } from "@/hooks/useAdaptive";
import RusDateSSR from "@/components/RusDateSSR/RusDateSSR";
import { RoutesNamespace } from "@/lib/constants/routesNamespace";

const NewsItem = ({
  id,
  title,
  description,
  images,
  created_at,
}: NewsModel) => {
  const previewImage = images[0];
  const isSmallTablet = useSmallTablet();

  return (
    <ContainerSC
      href={`${RoutesNamespace.NEWS}/${id}`}
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
  DescContainerSC,
  DescriptionSC,
  DateContainerSC,
} = useNewsItemStyles();

export default React.memo(NewsItem);
