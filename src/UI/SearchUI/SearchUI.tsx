import React from "react";
import SearchIcon from "@/assets/icons/SearchIcon.svg";
import {
  InputAdornment,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const SearchUI = (props: TextFieldProps) => {
  return (
    <TextFieldSC
      variant="standard"
      placeholder="Поиск по сайту"
      {...props}
      inputProps={{
        maxLength: 256,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIconSC />
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
      required
    />
  );
};

const TextFieldSC = styled(TextField)`
  width: 100%;
  max-width: 320px;
  min-width: 180px;

  & .MuiInputBase-root {
    &::before {
      border-bottom-color: ${ColorScheme.GRAY_LIGHT};
    }
  }

  & .MuiInputBase-input {
    padding-bottom: 14px;
    padding-right: 10px;
    min-height: 37px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: 271px;
  }
`;

const SearchIconSC = styled(SearchIcon)`
  width: 32px;
  height: 32px;

  margin-bottom: 5px;
  margin-right: 8px;

  & > path {
    fill: ${ColorScheme.GRAY_LIGHT};
  }
`;

export default React.memo(SearchUI);
