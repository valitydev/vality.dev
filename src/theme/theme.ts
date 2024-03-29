import type { Color } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

import { createTypography } from "./create-typography";

const OFFSET = 24 * 2;
const HTML_FONT_SIZE = 16;

const theme = createTheme({
  breakpoints: {
    values: {
      xl: 944 + OFFSET,
      lg: 944 + OFFSET,
      md: 686 + OFFSET,
      sm: 560 + OFFSET,
      xs: 288 + OFFSET,
    },
  },
  typography: createTypography(HTML_FONT_SIZE) as any,
  palette: {
    primary: {
      main: "#1D5BF6",
      A400: "#1D5BF6",
      100: "#D4DCF1",
      300: "#7D97D5",
      400: "#5274C7",
      700: "#1F396F",
      900: "#000C1F",
    },
    text: {
      primary: "#181818",
    },
    grey: {
      100: "#ECECEC",
      500: "#A0A0A0",
      800: "#464646",
    },
  },
});

export type AppTheme = typeof theme & { palette: { primary: Color } };
export { theme };
