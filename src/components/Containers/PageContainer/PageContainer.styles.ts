import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const BreadCrumbContainerSC = styled("section")`
  margin-bottom: 30px;
`;

const ChildrenSC = styled("div")`
  flex-grow: 1;
  min-width: 550px;
  margin: 0 35px !important;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    margin: 0 15px !important;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin: 0 !important;
    min-width: auto;
  }
`;

export const usePageContainerStyles = () => ({
  BreadCrumbContainerSC,
  ChildrenSC,
});
