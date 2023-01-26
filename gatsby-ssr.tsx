import { GatsbySSR } from "gatsby";

import { wrapPageElement as wrapPageElementBrowser } from "./gatsby-browser";

export const wrapPageElement: GatsbySSR["wrapPageElement"] =
  wrapPageElementBrowser;
