import { styled } from "@mui/material";

const ContainerSC = styled("div")`
  max-width: 830px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const useHAboutStyles = () => ({
  ContainerSC,
});
