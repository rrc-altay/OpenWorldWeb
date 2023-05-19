import React from "react";
import { about } from "@/lib/mock/about";
import { styled } from "@mui/material";

const FAbout = () => {
  return (
    <DescriptionSC>
      {about.desc}
      {"\n"}
      <a
        target="_blank"
        href={about.developerLink}
        rel="noopener noreferrer">
        {about.developer}
      </a>
    </DescriptionSC>
  );
};

const DescriptionSC = styled("p")`
  flex-grow: 1;
  white-space: pre-wrap;
  line-height: 25px;
`;

export default React.memo(FAbout);
