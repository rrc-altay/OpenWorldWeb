import React from "react";
import { css, styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Children } from "@/types/types";
import { Breakpoints } from "@/styles/breakpoints";

interface BoxWrapperProps extends Children {
  title?: string;
  isPaddingBottom?: boolean;
}
const BoxWrapper = ({
  title,
  children,
  isPaddingBottom = true,
}: BoxWrapperProps) => {
  return (
    <ContainerSC isPaddingBottom={isPaddingBottom}>
      {title && <TitleSC variant="h1">{title}</TitleSC>}
      {children}
    </ContainerSC>
  );
};

const PaddingBottom = css`
  padding-bottom: 36px;
`;

const ContainerSC = styled("div")<Pick<BoxWrapperProps, "isPaddingBottom">>`
  padding-top: 24px;
  padding-left: 36px;
  padding-right: 36px;

  margin-bottom: 30px;

  ${({ isPaddingBottom }) => isPaddingBottom && PaddingBottom};

  background: ${ColorScheme.MAIN};
  box-shadow: 0 0 10px ${ColorScheme.SHADOW};
  border-radius: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding-top: 20px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const TitleSC = styled(Typography)`
  text-align: center;
  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 20px;
  }
`;
export default React.memo(BoxWrapper);
