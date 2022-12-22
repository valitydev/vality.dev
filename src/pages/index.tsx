import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { Box, Stack } from "@mui/system";
import { Trans } from "gatsby-plugin-react-i18next";
import ProcessingImg from "../assets/svg/processing.svg";
import FraudbustersImg from "../assets/svg/fraudbusters.svg";
import ApplicationsImg from "../assets/svg/application.svg";
import ShopIcon from "../assets/svg/shop-icon.svg";
import GatewayIcon from "../assets/svg/gateway-icon.svg";
import ControlImg from "../assets/svg/control.svg";
import CapabilityImg from "../assets/svg/capability.svg";
import BankIcon from "../assets/svg/bank-icon.svg";
import ContactsImg from "../assets/svg/contacts.svg";
import { Card } from "../components/Card";
import { Block } from "../components/Block";
import { AntifraudBlock } from "../components/index/AntifraudBlock";
import { Header, PAGE_IDS } from "../components/index/Header";

const ContactsBlock: React.FC<React.ComponentProps<typeof Block>> = () => (
  <Block inverted>
    <Stack direction="row">
      <Stack flex={1} spacing={5.5}>
        <Box sx={{ typography: "h3", color: "#fff" }}>
          <Trans>Contacts</Trans>
        </Box>
        <Stack spacing={4.5}>
          <Box>
            <Trans>Email</Trans>
            <Trans>Telegram</Trans>
          </Box>
          <Box>
            <Trans>Social media</Trans>
          </Box>
        </Stack>
      </Stack>
      <Box flex={1}>
        <ContactsImg />
      </Box>
    </Stack>
  </Block>
);

const ProcessingBlock: React.FC<React.ComponentProps<typeof Block>> = () => (
  <Block title={<Trans>Processing</Trans>} inverted>
    <Stack spacing={17}>
      <Stack spacing={2} direction="row">
        <Card
          inverted
          flex="1"
          title={<Trans>Control</Trans>}
          image={<ControlImg />}
        >
          <Trans>
            control:description-1
            <br />
            control:description-2
          </Trans>
        </Card>
        <Card
          inverted
          flex="1"
          title={<Trans>Possibilities</Trans>}
          image={<CapabilityImg />}
        >
          <Trans>possibilities:description</Trans>
        </Card>
      </Stack>

      <Box>
        <Box sx={{ typography: "h3", color: "#fff" }}>
          <Trans>Support for all payment methods</Trans>
        </Box>
      </Box>

      <Box>
        <Box sx={{ typography: "h3", color: "#fff" }}>
          <Trans>Intuitive payment process</Trans>
        </Box>
      </Box>
    </Stack>
  </Block>
);

const OurProductsBlock: React.FC<React.ComponentProps<typeof Block>> = () => (
  <Block title={<Trans>Our products</Trans>}>
    <Stack spacing={17}>
      <Stack spacing={2} direction="row">
        <Card
          flex="1"
          title={<Trans>Processing</Trans>}
          image={<ProcessingImg />}
        >
          <Trans>processing:description</Trans>
        </Card>
        <Card
          flex="1"
          title={<Trans>Antifraud</Trans>}
          image={<FraudbustersImg />}
        >
          <Trans>antifraud:description</Trans>
        </Card>
      </Stack>

      <Stack direction="row">
        <Stack flex={1} spacing={5.5}>
          <Box sx={{ typography: "h3" }}>
            <Trans>For whom</Trans>
          </Box>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box width={64} height={64}>
                <ShopIcon />
              </Box>
              <Box>
                <Trans>Online stores and large retailers</Trans>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box width={64} height={64}>
                <BankIcon />
              </Box>
              <Box>
                <Trans>Processing solution for banks</Trans>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box width={64} height={64}>
                <GatewayIcon />
              </Box>
              <Box>
                <Trans>Payment gateways</Trans>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Box flex={1}>
          <ApplicationsImg />
        </Box>
      </Stack>
    </Stack>
  </Block>
);

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
