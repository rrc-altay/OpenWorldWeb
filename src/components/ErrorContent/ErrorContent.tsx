import React, { FC } from "react";
import { useErrorContentStyles } from "@/components/ErrorContent/ErrorContent.styles";

interface ErrorPageProps {
  Icon: FC;
  title: string;
  subtitle: string;
  description: string;
  button: {
    text: string;
    onClick: () => void;
  };
  buttonTwo?: {
    text: string;
    onClick: () => void;
  };
}

const ErrorContent = ({
  Icon,
  title,
  subtitle,
  description,
  button,
  buttonTwo,
}: ErrorPageProps) => {
  return (
    <ContainerSC>
      <WrapperSC>
        <IconContainerSC>
          <Icon />
        </IconContainerSC>
        <MobileTitleSC>{title}</MobileTitleSC>
        <TitleSC>
          ОШИБКА <span>{title}</span>
        </TitleSC>
        <SubtitleSC>{subtitle}</SubtitleSC>
        <DescriptionSC>{description}</DescriptionSC>
        <ButtonSC onClick={button.onClick}>{button.text}</ButtonSC>
        {buttonTwo && (
          <ButtonSC
            sx={{ marginTop: "10px" }}
            onClick={buttonTwo.onClick}>
            {buttonTwo.text}
          </ButtonSC>
        )}
      </WrapperSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  WrapperSC,
  IconContainerSC,
  MobileTitleSC,
  TitleSC,
  SubtitleSC,
  DescriptionSC,
  ButtonSC,
} = useErrorContentStyles();
export default React.memo(ErrorContent);
