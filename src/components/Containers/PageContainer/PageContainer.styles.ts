import { styled } from "@mui/material";

const BreadCrumbContainerSC = styled("section")`
  margin-bottom: 30px;
`;

const ContentSC = styled("div")`
  display: flex;
`;

const ChildrenSC = styled("div")`
  flex-grow: 1;
  margin: 0 35px !important;
`;

const AsideSC = styled("aside")`
  flex: 1;
`;

export const usePageContainerStyles = () => ({
  BreadCrumbContainerSC,
  ContentSC,
  ChildrenSC,
  AsideSC,
});
