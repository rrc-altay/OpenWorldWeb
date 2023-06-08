import React from "react";
import SearchUI from "@/UI/SearchUI/SearchUI";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";
import { useSearch } from "@/hooks/useSearch";

const HSearch = () => {
  const { value, handleSubmit, handleChangeValue } = useSearch();

  return (
    <ContainerSC onSubmit={handleSubmit}>
      <SearchUI
        value={value}
        onChange={handleChangeValue}
      />
    </ContainerSC>
  );
};

const ContainerSC = styled("form")`
  flex: 1;
  margin-right: 50px;

  @media (max-width: ${Breakpoints.TABLE}px) {
    margin-right: 32px;
    height: 37px;
  }
`;

export default React.memo(HSearch);
