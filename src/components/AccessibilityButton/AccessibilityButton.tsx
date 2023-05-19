import React from "react";
import { Button, styled } from "@mui/material";
import BigGlassIcon from "@/assets/icons/BigGlassIcon.svg";
import ColorScheme from "@/styles/theme/colorScheme";

const AccessibilityButton = () => {
  return (
    <ButtonSC id="specialButton">
      <BigGlassIcon />
      <span>Версия для слабовидящих</span>
    </ButtonSC>
  );
};

const ButtonSC = styled(Button)`
  min-width: 0;
  padding: 0 25px 0 15px;

  font-weight: 700;
  //font-size: 12px;
  //line-height: 14px;

  background-color: ${ColorScheme.MAIN};
  border-radius: 50px 0 0 50px;

  justify-content: flex-end;

  &:hover {
    background-color: ${ColorScheme.MAIN};
  }

  & > span {
    margin-left: 17px;
    color: ${ColorScheme.PRIMARY_DARK};
  }
`;

export default React.memo(AccessibilityButton);
