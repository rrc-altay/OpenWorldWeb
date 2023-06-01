import { Button, styled, Typography } from "@mui/material";
import SearchIcon from "@/assets/icons/SearchIcon.svg";
import ColorScheme from "@/styles/theme/colorScheme";
import { TextFieldUI } from "@/UI/TextFieldUI/TextFieldUI";
import { Breakpoints } from "@/styles/breakpoints";

const FormSC = styled("form")`
  margin-bottom: 32px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 20px;
  }
`;

const TitleContainerSC = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 23px;
  }
`;

const TitleSC = styled(Typography)`
  word-break: break-word;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

const SearchIconSC = styled(SearchIcon)`
  width: 32px;
  height: 32px;
  margin-right: 10px;

  flex-shrink: 0;

  & > path {
    fill: ${ColorScheme.SECONDARY};
  }
`;

const FieldContainerSC = styled("div")`
  display: flex;
  align-items: center;
`;

const TextFieldUISC = styled(TextFieldUI)`
  & .MuiInputBase-input {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const ButtonSC = styled(Button)`
  padding: 12px 0;
  margin-left: 8px;
  min-width: 151px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    min-width: 112px;
    min-height: 44px;
    border-radius: 15px;
  }
`;

export const useSearchFindStyles = () => ({
  FormSC,
  TitleContainerSC,
  TitleSC,
  SearchIconSC,
  FieldContainerSC,
  TextFieldUISC,
  ButtonSC,
});
