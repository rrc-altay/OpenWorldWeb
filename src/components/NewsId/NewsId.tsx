import React from "react";
import { NewsModel } from "@/lib/models/NewsModel";
import BoxWrapper from "@/components/Wrappers/BoxWrapper/BoxWrapper";
import RusDateSSR from "@/components/RusDateSSR/RusDateSSR";
import { useNEwsIdStyles } from "@/components/NewsId/NewsId.styles";
import SwiperUI from "@/UI/SwiperUI/SwiperUI";
import { Typography } from "@mui/material";
import { RoutesNamespace } from "@/lib/constants/routesNamespace";

const NewsId = ({ title, description, created_at, images }: NewsModel) => {
  return (
    <ContainerSC>
      <BoxWrapper
        title={title}
        isPaddingBottom={false}
        button={{
          href: RoutesNamespace.HOME,
          children: "Вернуться ко всем новостям",
        }}>
        <WrapperSC>
          <Typography
            variant="body1"
            component="pre">
            {description}
          </Typography>
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
    </ContainerSC>
  );
};

const { ContainerSC, WrapperSC, DateContainerSC, SwiperContainerSC } =
  useNEwsIdStyles();

export default React.memo(NewsId);
