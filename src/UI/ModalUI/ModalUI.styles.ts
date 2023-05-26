import { Dialog, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";

const DialogSC = styled(Dialog)`
  & .MuiBackdrop-root {
    background-color: ${ColorScheme.BACKDOOR};
  }

  & .MuiPaper-root {
    align-items: flex-end;

    padding: 16px 16px 48px 20px;

    color: ${ColorScheme.MAIN};
    background-color: ${ColorScheme.PRIMARY};
    box-shadow: 0 0 10px rgba(32, 43, 109, 0.1);
    border-radius: 35px;

    font-family: Lato, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    white-space: pre-wrap;
  }
`;

const CloseButtonSC = styled("button")`
  width: 32px;
  height: 32px;
  background-color: transparent;
`;

const WrapperSC = styled("div")`
  padding-right: 4px;
`;

export const useModalUIStyles = () => ({
  DialogSC,
  CloseButtonSC,
  WrapperSC,
});
