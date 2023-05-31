import React from "react";
import { TableModel } from "@/lib/models/TableModel";
import { css, styled } from "@mui/material";
import { tableMock } from "@/lib/mock/tableMock";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const TableAboutCenter = (props: TableModel) => {
  return (
    <ContainerSC>
      {Object.values(props).map((item, index) => (
        <>
          <LeftsC>{tableMock.aboutCenter[index]}</LeftsC>
          <RightSC>{item}</RightSC>
        </>
      ))}
    </ContainerSC>
  );
};

const MixinContent = css`
  min-height: 75px;

  padding: 5px 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding: 10px 15px;
    min-height: 67px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    min-height: 74px;
    padding: 19px 8px;
  }
`;

const ContainerSC = styled("div")`
  display: grid;

  grid-template-columns: 0.85fr 1fr;
  gap: 4px;

  border-radius: 30px;
  overflow: hidden;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    grid-template-columns: 0.8fr 1fr;
    gap: 3px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    grid-template-columns: 0.7fr 1fr;
    gap: 2px;
  }
`;

const LeftsC = styled("div")`
  color: ${ColorScheme.SECONDARY_DARK};
  background-color: ${ColorScheme.PRIMARY_LIGHT};

  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;

  ${MixinContent};

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

const RightSC = styled("div")`
  color: ${ColorScheme.GRAY_LIGHT};
  background-color: ${ColorScheme.MAIN_TWO};

  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  text-align: center;

  ${MixinContent};

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export default React.memo(TableAboutCenter);
