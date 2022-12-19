import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { Layout } from "./src/components/Layout";
import { createGlobalStyle } from "./src/styles/global-styles";
import { Global } from "@emotion/react";
import { ThemeProvider } from "@mui/system";
import { theme } from "./src/theme/theme";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={createGlobalStyle(theme)} />
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
};
