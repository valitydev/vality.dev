import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { Layout } from "./src/components/Layout";
import GlobalStyle from "./src/styles/global-styles";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <>
      <GlobalStyle />
      <Layout>{element}</Layout>
    </>
  );
};
