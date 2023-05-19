import React from "react";
import SearchIcon from "@/assets/icons/SearchIcon.svg";
import {
  InputAdornment,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";

const SearchUI = (props: TextFieldProps) => {
  return (
    <TextFieldSC
      variant="standard"
      placeholder="Поиск по сайту"
      {...props}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIconSC />
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
    />
  );
};

const TextFieldSC = styled(TextField)`
  width: 320px;
  & .MuiInputBase-root {
    &::before {
      border-bottom-color: ${ColorScheme.GRAY_LIGHT};
    }
  }

  & .MuiInputBase-input {
    padding-bottom: 8px;
    padding-right: 5px;
  }
`;

const SearchIconSC = styled(SearchIcon)`
  margin-bottom: 5px;
  margin-right: 8px;
  & > path {
    fill: ${ColorScheme.GRAY_LIGHT};
  }
`;

export default React.memo(SearchUI);
