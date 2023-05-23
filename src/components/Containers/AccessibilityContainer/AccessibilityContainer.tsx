import React from "react";
import { Children } from "@/types/types";
import AccessibilityButton from "@/components/AccessibilityButton/AccessibilityButton";
import { styled } from "@mui/material";
import { zIndexes } from "@/styles/zIndexes";

const AccessibilityContainer = ({ children }: Children) => {
  return (
    <>
      {children}
      <HiddenButton>
        <AccessibilityButton />
      </HiddenButton>
    </>
  );
};

const HiddenButton = styled("div")`
  width: 0;
  height: 0;

  visibility: hidden;

  position: absolute;
  z-index: ${zIndexes.HIDDEN};
`;

export default React.memo(AccessibilityContainer);
