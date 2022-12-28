import * as React from "react";

import { Box } from "@mui/system";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import { PAGE_IDS } from "~/components/AppNav";
import { AntifraudBlock } from "~/components/index/AntifraudBlock";
import { ContactsBlock } from "~/components/index/ContactsBlock";
import { HeaderBlock } from "~/components/index/HeaderBlock";
import { OurProductsBlock } from "~/components/index/OurProductsBlock";
import { ProcessingBlock } from "~/components/index/ProcessingBlock";

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
