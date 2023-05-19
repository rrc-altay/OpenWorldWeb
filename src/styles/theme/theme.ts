import { createTheme } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: ColorScheme.PRIMARY_LIGHT,
      main: ColorScheme.PRIMARY,
      dark: ColorScheme.PRIMARY_TWO,
    },
    secondary: {
      light: ColorScheme.SECONDARY_LIGHT,
      main: ColorScheme.SECONDARY,
      dark: ColorScheme.SECONDARY_DARK,
    },
    text: {
      primary: ColorScheme.GRAY,
      secondary: ColorScheme.GRAY_LIGHT,
      disabled: ColorScheme.GRAY,
    },
  },
  typography: {
    fontFamily: "Late, sans-serif",

    fontWeightBold: "800",
    fontWeightMedium: "700",
    fontWeightRegular: "600",
    fontWeightLight: "400",
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableTouchRipple: true,
        sx: {
          padding: "17px 20px",
          minWidth: "180px",

          color: ColorScheme.MAIN,
          backgroundColor: ColorScheme.PRIMARY,
          boxShadow: 0,
          borderRadius: "50px",

          borderWidth: "2px !important",
          borderStyle: "solid",

          fontFamily: "inherit",
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "16px",
          textTransform: "none",

          "& .MuiTouchRipple-root": {
            zIndex: -1,
          },

          "&:hover": {
            boxShadow: 0,
          },
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        variant: "indeterminate",
        disableShrink: true,
        size: 48,
        thickness: 5,
        sx: {
          animationDuration: "1000ms",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        sx: {
          "& .MuiInputBase-input": {
            color: ColorScheme.GRAY,
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: "400",

            "&::placeholder": {
              opacity: 1,
              color: ColorScheme.GRAY_LIGHT,
              fontSize: "inherit",
              lineHeight: "inherit",
              fontWeight: "inherit",
            },
            "&:focus": {
              "&::placeholder": {
                opacity: 0.5,
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
