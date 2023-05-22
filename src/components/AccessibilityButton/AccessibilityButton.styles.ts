import { Button, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";
import GlassIcon from "@/assets/icons/GlassIcon.svg";

const ButtonSC = styled(Button)`
  min-width: 0;
  height: 66px;

  padding: 0 25px 0 15px;

  font-weight: 700;

  background-color: ${ColorScheme.MAIN};
  border-radius: 50px 0 0 50px;

  justify-content: flex-end;

  transform: translateX(calc(100% - 75px));
  transition: 0.2s all linear;

  &:hover {
    transform: translateY(0);
    background-color: ${ColorScheme.MAIN};
  }

  & > span {
    margin-left: 17px;
    color: ${ColorScheme.PRIMARY_DARK};
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 44px;
    height: 44px;

    justify-content: center;

    padding: 0;

    border-radius: 50%;

    transform: translateY(0);

    & > span {
      display: none;
    }
  }
`;

const IconSC = styled(GlassIcon)`
  width: 55px;

  & > path {
    stroke: ${ColorScheme.PRIMARY_DARK};
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 38px;
  }
`;

export const useAccessibilityButtonStyles = () => ({
  ButtonSC,
  IconSC,
});
