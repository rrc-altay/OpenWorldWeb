import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("div")`
  flex-shrink: 0.5;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    order: 2;
  }
`;

const ListSC = styled("ul")`
  & > *:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    & > * {
      margin-right: 10px;
      margin-bottom: 20px;
    }

    & > *:last-child {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

export const useFContactsStyles = () => ({
  ContainerSC,
  ListSC,
});
