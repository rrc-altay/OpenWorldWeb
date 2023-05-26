import { styled, TextField } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";

export const TextFieldUI = styled(TextField)`
  width: 100%;

  & .MuiInputBase-root {
    border-radius: 20px;
  }

  & .MuiInputBase-input {
    padding: 7px 20px;

    font-family: Lato, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: 2px solid ${ColorScheme.GRAY_LIGHT};
  }

  & .MuiFormHelperText-root {
    margin-top: 5px;
    font-size: 13px;
    line-height: 13px;
  }
`;
