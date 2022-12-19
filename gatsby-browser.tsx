import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { Layout } from "./src/components/Layout";
import { GLOBAL_STYLE } from "./src/styles/global-styles";
import { Global } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/system";
import { createTypography } from "./src/theme/create-typography";

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

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GLOBAL_STYLE} />
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
};
