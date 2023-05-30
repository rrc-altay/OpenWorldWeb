import { Children } from "@/types/types";
import { ButtonProps } from "@mui/material";

export interface BoxWrapperProps extends Children {
  title?: string;
  isPaddingBottom?: boolean;
  button?: ButtonProps;
}
