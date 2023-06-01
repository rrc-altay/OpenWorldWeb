import { Button, styled, Typography } from "@mui/material";
import SearchIcon from "@/assets/icons/SearchIcon.svg";
import ColorScheme from "@/styles/theme/colorScheme";
import { TextFieldUI } from "@/UI/TextFieldUI/TextFieldUI";

const FormSC = styled("form")`
  margin-bottom: 32px;
`;

const TitleContainerSC = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const TitleSC = styled(Typography)`
  word-break: break-word;
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
