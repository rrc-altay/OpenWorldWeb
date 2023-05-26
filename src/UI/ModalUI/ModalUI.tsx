import React from "react";
import { DialogProps } from "@mui/material";
import { useModalUIStyles } from "@/UI/ModalUI/ModalUI.styles";
import { Children } from "@/types/types";
import CloseIcon from "@/assets/icons/CloseIcon.svg";

type ModalUIProps = DialogProps & Children;

const ModalUI = ({ children, ...dialogProps }: ModalUIProps) => {
  return (
    <DialogSC {...dialogProps}>
      <CloseButtonSC onClick={() => dialogProps.onClose || undefined}>
        <CloseIcon />
      </CloseButtonSC>
      <WrapperSC>{children}</WrapperSC>
    </DialogSC>
  );
};

const { DialogSC, CloseButtonSC, WrapperSC } = useModalUIStyles();

export default React.memo(ModalUI);
