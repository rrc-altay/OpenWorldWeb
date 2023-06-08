import React from "react";
import { useBoxWrapperStyles } from "@/components/Wrappers/BoxWrapper/BoxWrapper.styles";
import { BoxWrapperProps } from "@/components/Wrappers/BoxWrapper/types";
import { bviSpeech } from "@/lib/constants/bvi";

const BoxWrapper = ({
  title,
  children,
  isPaddingBottom = true,
  button,
}: BoxWrapperProps) => {
  return (
    <>
      <ContainerSC isPaddingBottom={isPaddingBottom}>
        {title && (
          <TitleSC
            {...bviSpeech}
            variant="h1">
            {title}
          </TitleSC>
        )}
        {children}
      </ContainerSC>
      {button && <ButtonSC {...button}>{button.children}</ButtonSC>}
    </>
  );
};

const { ContainerSC, TitleSC, ButtonSC } = useBoxWrapperStyles();

export default React.memo(BoxWrapper);
