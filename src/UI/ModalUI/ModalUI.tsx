import React, { useEffect, useState } from "react";
import { DialogProps } from "@mui/material";
import { useModalUIStyles } from "@/UI/ModalUI/ModalUI.styles";
import { Children } from "@/types/types";
import CloseIcon from "@/assets/icons/CloseIcon.svg";
import { createPortal } from "react-dom";

type ModalUIProps = DialogProps & Children & { handleClose: () => void };

const ModalUI = ({ children, handleClose, ...dialogProps }: ModalUIProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  //? SSR SKIP
  if (!isVisible) return null;

  return createPortal(
    <DialogSC
      {...dialogProps}
      onClose={handleClose}
      disablePortal={true}>
      <CloseButtonSC onClick={handleClose}>
        <CloseIcon />
      </CloseButtonSC>
      <WrapperSC>{children}</WrapperSC>
    </DialogSC>,
    document.querySelector("#__next") as Element,
  );
};

const { DialogSC, CloseButtonSC, WrapperSC } = useModalUIStyles();

export default React.memo(ModalUI);
