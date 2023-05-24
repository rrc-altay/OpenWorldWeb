import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const StickyContainerSC = styled("section")`
  display: flex;
  flex-direction: column;
`;

const ContainerSC = styled("div")`
  transform: translateY(-44px);
  margin-top: 44px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    transform: translateY(0);
    margin-top: 32px;
  }
`;

export const useMainLayoutStyles = () => ({
  StickyContainerSC,
  ContainerSC,
});
