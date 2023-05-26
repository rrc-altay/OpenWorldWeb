import React from "react";
import { NewsModel } from "@/lib/models/NewsModel";
import BoxWrapper from "@/components/Wrappers/BoxWrapper/BoxWrapper";
import RusDateSSR from "@/components/RusDateSSR/RusDateSSR";
import { RoutesNamespace } from "@/lib/constants/routesNamespace";
import { useNEwsIdStyles } from "@/components/NewsId/NewsId.styles";
import SwiperUI from "@/UI/SwiperUI/SwiperUI";

const NewsId = ({ title, description, created_at, images }: NewsModel) => {
  console.log(images);
  return (
    <ContainerSC>
      <BoxWrapper
        title={title}
        isPaddingBottom={false}>
        <WrapperSC>
          <ParagraphSC>{description}</ParagraphSC>
          {created_at && (
            <DateContainerSC>
              <RusDateSSR created_at={created_at} />
            </DateContainerSC>
          )}
          {!!images.length && (
            <SwiperContainerSC>
              <SwiperUI
                title={title}
                data={images}
              />
            </SwiperContainerSC>
          )}
        </WrapperSC>
      </BoxWrapper>
      <ButtonSC href={RoutesNamespace.HOME}>
        Вернуться ко всем новостям
      </ButtonSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  WrapperSC,
  ParagraphSC,
  DateContainerSC,
  ButtonSC,
  SwiperContainerSC,
} = useNEwsIdStyles();

export default React.memo(NewsId);
