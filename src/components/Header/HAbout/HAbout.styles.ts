import { styled } from "@mui/material";

const ContainerSC = styled("ul")`
  max-width: 830px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > *:last-child {
    margin-right: 0;
  }
`;

export const useHAboutStyles = () => ({
  ContainerSC,
});
