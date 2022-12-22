import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { AntifraudBlock } from "../components/index/AntifraudBlock";
import { Header, PAGE_IDS } from "../components/index/Header";
import { OurProductsBlock } from "../components/index/OurProductsBlock";
import { ProcessingBlock } from "../components/index/ProcessingBlock";
import { ContactsBlock } from "../components/index/ContactsBlock";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <OurProductsBlock id={PAGE_IDS.ourProducts} />
      <ProcessingBlock id={PAGE_IDS.processing} />
      <AntifraudBlock id={PAGE_IDS.antifraud} />
      <ContactsBlock id={PAGE_IDS.contacts} />
    </>
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
