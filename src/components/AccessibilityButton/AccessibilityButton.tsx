import React from "react";
import { Button, styled } from "@mui/material";
import GlassIcon from "@/assets/icons/GlassIcon.svg";
import ColorScheme from "@/styles/theme/colorScheme";

const AccessibilityButton = () => {
  return (
    <ButtonSC id="specialButton">
      <IconContainerSC>
        <GlassIcon />
      </IconContainerSC>
      <span>Версия для слабовидящих</span>
    </ButtonSC>
  );
};

const ButtonSC = styled(Button)`
  min-width: 0;
  padding: 0 25px 0 15px;

  font-weight: 700;

  background-color: ${ColorScheme.MAIN};
  border-radius: 50px 0 0 50px;

  justify-content: flex-end;

  transform: translateX(calc(100% - 74px));
  transition: 0.2s all linear;

  &:hover {
    transform: translateY(0);
    background-color: ${ColorScheme.MAIN};
  }

  & > span {
    margin-left: 17px;
    color: ${ColorScheme.PRIMARY_DARK};
  }
`;

const IconContainerSC = styled("div")`
  & > svg {
    width: 45px;
    height: 15px;
  }
`;

export default React.memo(AccessibilityButton);
