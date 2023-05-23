import { styled } from "@mui/material";

const BreadCrumbContainerSC = styled("section")`
  margin-bottom: 30px;
`;

const ChildrenSC = styled("div")`
  flex-grow: 1;
  margin: 0 35px !important;
`;

export const usePageContainerStyles = () => ({
  BreadCrumbContainerSC,
  ChildrenSC,
});
