import { styled } from "@mui/material";
import { TextFieldUI } from "@/UI/TextFieldUI/TextFieldUI";

export const TextAreaUI = styled(TextFieldUI)`
  & .MuiInputBase-input {
    padding: 0;
  }

  & .MuiInputBase-root {
    align-items: flex-start;
    min-height: 166px;
  }
`;
