import * as React from "react";

import { Global } from "@emotion/react";
import { ThemeProvider } from "@mui/system";
import type { GatsbyBrowser } from "gatsby";

import { Layout } from "./src/components/Layout";
import { createGlobalStyle } from "./src/styles/global-styles";
import { theme } from "./src/theme/theme";

import "./src/styles/global-styles.css";

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
