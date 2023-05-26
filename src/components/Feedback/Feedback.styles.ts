import { Button, FormControlLabel, styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ParagraphSC = styled("p")`
  max-width: 340px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;

  text-align: center;

  color: ${ColorScheme.GRAY};

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    font-size: 13.5px;
    line-height: 16px;
  }
`;

const FormSC = styled("form")`
  width: 100%;
  margin-top: 24px;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-top: 16px;
  }
`;

const FormFieldsSC = styled("div")`
  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: row;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    flex-direction: column;
  }
`;

const FormTopSC = styled("div")`
  display: flex;

  & > *:last-child {
    margin-right: 0;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
    min-height: 150px;

    & > *:last-child {
      margin-right: 8px;
    }
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    flex-direction: column;

    min-height: auto;

    & > *:last-child {
      margin-right: 0;
    }
  }
`;

const TextFieldContainerSC = styled("div")`
  flex: 1;
  margin-right: 12px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    min-width: 235px;
    margin-right: 8px;
    margin-bottom: 9px;
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    min-width: 100px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-right: 0;
    min-width: auto;
    margin-bottom: 8px;
  }
`;

const FormMiddleSC = styled("div")`
  margin-top: 20px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-grow: 1;
    margin-top: 0;

    & > div {
      & > .MuiInputBase-root {
        min-height: 151px;
      }
    }
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    & > div {
      & > .MuiInputBase-root {
        min-height: 111px;
      }
    }
  }
`;

const FormBottomSC = styled("div")`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 16px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const LabelSC = styled(FormControlLabel)`
  padding-left: 2px;
  & .MuiTypography-root {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;

    color: ${ColorScheme.GRAY};

    max-width: 250px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-bottom: 20px;

    & .MuiTypography-root {
      font-size: 13.5px;
      line-height: 16px;
    }
  }
`;

const ButtonSC = styled(Button)`
  max-width: 256px;
  flex-grow: 1;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    width: 100%;
    align-self: center;
  }
`;

const ErrorSC = styled(Typography)`
  align-self: flex-start;

  margin-top: 10px;

  color: ${ColorScheme.ERROR};

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    font-size: 13.5px;
    line-height: 16px;
  }
`;

const ModalContentSC = styled("div")`
  min-width: 316px;
`;

export const useFeedbackStyles = () => ({
  ContainerSC,
  ParagraphSC,
  FormSC,
  FormFieldsSC,
  FormTopSC,
  FormMiddleSC,
  FormBottomSC,
  TextFieldContainerSC,
  LabelSC,
  ButtonSC,
  ErrorSC,
  ModalContentSC,
});
