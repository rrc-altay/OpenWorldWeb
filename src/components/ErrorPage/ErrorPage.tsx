import React, { FC } from "react";
import AccessibilityContainer from "@/components/Containers/AccessibilityContainer/AccessibilityContainer";
import { useErrorPageStyles } from "@/components/ErrorPage/ErrorPage.styles";
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

const ErrorPage = ({
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
} = useErrorPageStyles();
export default React.memo(ErrorPage);
