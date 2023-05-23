import React, { FC } from "react";
import AccessibilityContainer from "@/components/Containers/AccessibilityContainer/AccessibilityContainer";
import { useErrorContentStyles } from "@/components/ErrorContent/ErrorContent.styles";
import { useBigMobile } from "@/hooks/useAdaptive";

interface ErrorPageProps {
  Icon: FC;
  title: string;
  subtitle: string;
  description: string;
  button: {
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
}: ErrorPageProps) => {
  const isBigMobile = useBigMobile();

  return (
    <ContainerSC>
      <AccessibilityContainer>
        <WrapperSC>
          <IconContainerSC>
            <Icon />
          </IconContainerSC>
          <MobileTitleSC>{title}</MobileTitleSC>
          <TitleSC>ОШИБКА {isBigMobile ? "" : title}</TitleSC>
          <SubtitleSC>{subtitle}</SubtitleSC>
          <DescriptionSC>{description}</DescriptionSC>
          <ButtonSC onClick={button.onClick}>{button.text}</ButtonSC>
        </WrapperSC>
      </AccessibilityContainer>
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
