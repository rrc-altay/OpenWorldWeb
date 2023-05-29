import React from "react";
import { aboutMock } from "@/lib/mock/aboutMock";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";
import ColorScheme from "@/styles/theme/colorScheme";

const FAbout = () => {
  return (
    <DescriptionSC>
      {aboutMock.desc}
      {"\n"}
      <a
        target="_blank"
        href={aboutMock.developerLink}
        rel="noopener noreferrer">
        {aboutMock.developer}
      </a>
    </DescriptionSC>
  );
};

const DescriptionSC = styled("p")`
  flex-grow: 1;
  white-space: pre-wrap;
  line-height: 25px;
  margin-right: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    order: 3;
    margin-right: 0;
    padding-top: 20px;

    border-top: 1px solid ${ColorScheme.SECONDARY_DARK};
    color: ${ColorScheme.PRIMARY_DARK};

    font-size: 12px;
    line-height: 140%;
    text-align: center;
  }
`;

export default React.memo(FAbout);
