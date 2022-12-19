import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { Layout } from "./src/components/Layout";
import { GLOBAL_STYLE } from "./src/styles/global-styles";
import { Global } from "@emotion/react";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <>
      <Global styles={GLOBAL_STYLE} />
      <Layout>{element}</Layout>
    </>
  );
};
