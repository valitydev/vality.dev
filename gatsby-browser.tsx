import * as React from "react";

import { Global } from "@emotion/react";
import { ThemeProvider } from "@mui/system";
import type { GatsbyBrowser } from "gatsby";

import { Layout } from "./src/components/Layout";
import { createGlobalStyle } from "./src/styles/global-styles";
import { theme } from "./src/theme/theme";

import "./src/styles/global-styles.css";
import "./src/styles/browser-styles.css";

const getLoaderElements = () => {
  return [
    document.getElementsByClassName("loader").item(0) as HTMLDivElement,
    document.getElementsByClassName("loader-wrapper").item(0) as HTMLDivElement,
  ];
};

export const onInitialClientRender = () => {
  getLoaderElements().forEach((el) => (el.style.opacity = "0"));
  setTimeout(() => {
    document.body.removeChild(getLoaderElements()[1]);
  }, 1000);
};

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
