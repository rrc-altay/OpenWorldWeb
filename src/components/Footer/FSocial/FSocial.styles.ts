import { styled } from "@mui/material";

const ContainerSC = styled("div")`
  margin-right: 90px;
`;

const ListSC = styled("ul")`
  display: flex;
  & > *:last-child {
    margin-right: 0;
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
