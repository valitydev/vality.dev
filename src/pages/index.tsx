import * as React from "react";

import { Box } from "@mui/system";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import { PAGE_IDS } from "~/components/AppNav";
import { HeaderBlock } from "~/components/index/HeaderBlock";

const AntifraudBlock = React.lazy(
  () => import("~/components/index/AntifraudBlock")
);
const ContactsBlock = React.lazy(
  () => import("~/components/index/ContactsBlock")
);
const ProcessingBlock = React.lazy(
  () => import("~/components/index/ProcessingBlock")
);
const OurProductsBlock = React.lazy(
  () => import("~/components/index/OurProductsBlock")
);

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <HeaderBlock />
      <OurProductsBlock id={PAGE_IDS.ourProducts} />
      <ProcessingBlock id={PAGE_IDS.processing} />
      <AntifraudBlock id={PAGE_IDS.antifraud} />
      <ContactsBlock id={PAGE_IDS.contacts} />
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Vality</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
