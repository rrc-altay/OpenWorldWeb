import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("div")`
  flex-shrink: 0;
  margin-right: 90px;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    margin-right: 40px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    order: 1;
  }
`;

const ListSC = styled("ul")`
  display: flex;

  & > *:last-child {
    margin-right: 0;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 20px;
  }
`;

const ItemSC = styled("li")`
  width: 32px;
  height: 32px;
  margin-right: 20px;
`;

const LinkSC = styled("a")`
  display: block;
  width: 100%;
  height: 100%;
`;

const ImgSC = styled("img")``;

export const useFSocialStyles = () => ({
  ContainerSC,
  ListSC,
  ItemSC,
  LinkSC,
  ImgSC,
});
