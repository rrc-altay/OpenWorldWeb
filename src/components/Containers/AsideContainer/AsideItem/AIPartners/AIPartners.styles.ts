import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 6px;
  }

  @media (max-width: ${Breakpoints.TABLE}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ItemSC = styled("li")`
  width: 100%;
  height: 100%;

  max-width: 88px;
  max-height: 88px;

  overflow: hidden;
`;

const LinkSC = styled("a")`
  display: block;
  width: inherit;
  height: inherit;
`;

const ImgSC = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const useAIPartnersStyles = () => ({
  ContainerSC,
  ItemSC,
  LinkSC,
  ImgSC,
});
