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
`;

const FormSC = styled("form")`
  width: 100%;

  margin-top: 24px;
`;

const FormFieldsSC = styled("div")`
  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: row;
  }
`;

const FormTopSC = styled("div")`
  display: flex;

  & > *:last-child {
    margin-right: 0;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
  }
`;

const FormMiddleSC = styled("div")`
  margin-top: 20px;
`;

const FormBottomSC = styled("div")`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
`;

const TextFieldContainerSC = styled("div")`
  flex: 1;
  margin-right: 12px;
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
`;

const ButtonSC = styled(Button)`
  max-width: 256px;
  flex-grow: 1;
`;

const ErrorSC = styled(Typography)`
  align-self: flex-start;

  margin-top: 10px;

  color: ${ColorScheme.ERROR};
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
