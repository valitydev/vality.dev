import { createTheme } from "@mui/system";
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
  typography: createTypography(HTML_FONT_SIZE),
});

export { theme };
