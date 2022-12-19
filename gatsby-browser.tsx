import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { Layout } from "./src/components/Layout";
import { GLOBAL_STYLE } from "./src/styles/global-styles";
import { Global } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/system";

const OFFSET = 24 * 2;

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
});

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <>
      <Global styles={GLOBAL_STYLE} />
      <ThemeProvider theme={theme}>
        <Layout>{element}</Layout>
      </ThemeProvider>
    </>
  );
};
