import { styled, TextField } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

export const TextFieldUI = styled(TextField)`
  width: 100%;

  & .MuiInputBase-root {
    border-radius: 20px;

    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      border-radius: 15px;
    }
  }

  & .MuiInputBase-input {
    padding: 13px 20px;
    min-height: 37px;

    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;

    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      padding: 10.5px 20px;
    }
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
