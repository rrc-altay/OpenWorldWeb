import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("ul")`
  max-width: 830px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > *:last-child {
    margin-right: 0;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

export const useHAboutStyles = () => ({
  ContainerSC,
});
