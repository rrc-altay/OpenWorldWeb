import { styled } from "@mui/material";

const HeaderSC = styled("header")`
  padding: 14px 0;
`;

const WrapperSC = styled("section")`
  display: flex;
  justify-content: space-between;
`;

export const useHeaderStyles = () => ({
  HeaderSC,
  WrapperSC,
});
