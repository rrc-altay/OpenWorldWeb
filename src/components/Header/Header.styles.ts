import { styled } from "@mui/material";

const HeaderSC = styled("header")`
  padding: 14px 0;
`;

const WrapperSC = styled("section")`
  display: flex;
  justify-content: space-between;
`;

const SearchContainerSC = styled("div")`
  flex-shrink: 0;
  margin-right: 50px;
`;

export const useHeaderStyles = () => ({
  HeaderSC,
  WrapperSC,
  SearchContainerSC,
});
