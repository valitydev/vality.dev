import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import UnstyledLogo from "../assets/svg/logo.svg";
import { Container, Box, Stack, Theme } from "@mui/system";
import UnstyledFintech from "../assets/svg/fintech.svg";
import headerBgGlowingBallSrc from "../images/header-bg-glowing-ball.svg";
import ghSrc from "../images/gh.png";
import { Button } from "../components/Button";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "../components/Link";
import GitHubIcon from "../assets/svg/github.svg";
import ProcessingImg from "../assets/svg/processing.svg";
import FraudbustersImg from "../assets/svg/fraudbusters.svg";
import ApplicationsImg from "../assets/svg/application.svg";
import ShopIcon from "../assets/svg/shop-icon.svg";
import GatewayIcon from "../assets/svg/gateway-icon.svg";
import ControlImg from "../assets/svg/control.svg";
import CapabilityImg from "../assets/svg/capability.svg";
import BankIcon from "../assets/svg/bank-icon.svg";
import ContactsImg from "../assets/svg/contacts.svg";
import CONFIG from "../../config.json";
import { Card } from "../components/Card";
import { Block } from "../components/Block";
import { AntifraudBlock } from "./landing/AntifraudBlock";

const PAGE_IDS = {
  ourProducts: "our-products",
  processing: "processing",
  antifraud: "antifraud",
  contacts: "contacts",
};

const Logo = styled(UnstyledLogo)(
  ({ theme }: { theme: Theme }) => css`
    width: auto;
    height: 32px;

    ${theme.breakpoints.down("lg")} {
      height: 24px;
    }
  `
);

const Fintech = styled(UnstyledFintech)(
  ({ theme }: { theme: Theme }) => css`
  margin-right: -47px;
  margin-top: -20px;
  height: 330px;

  ${theme?.breakpoints.down("lg")} {
    height: 192px;
  },
`
);

const HeaderButton = styled(Button)`
  padding-left: ${({ theme }) => theme.spacing(6.5)};
  padding-right: ${({ theme }) => theme.spacing(6.5)};
`;

const Header: React.FC = () => {
  const { languages, language } = useI18next();

  return (
    <Box
      sx={{
        backgroundColor: "#000c1f",
        color: "#fff",
        backgroundImage: `url(${headerBgGlowingBallSrc})`,
        backgroundPosition: "calc(50% + 400px) 0%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container fixed>
        <Stack spacing={6}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={2}
            alignItems="center"
            sx={{ pt: 2, pb: 2 }}
          >
            <Logo />
            <Stack direction="row" spacing={3.5}>
              <Link inverted to={`#${PAGE_IDS.ourProducts}`}>
                <Trans>Our products</Trans>
              </Link>
              <Link inverted to={`#${PAGE_IDS.processing}`}>
                <Trans>Processing</Trans>
              </Link>
              <Link inverted to={`#${PAGE_IDS.antifraud}`}>
                <Trans>Antifraud</Trans>
              </Link>
              <Link inverted to={`#${PAGE_IDS.contacts}`}>
                <Trans>Contacts</Trans>
              </Link>
            </Stack>
            <Stack spacing={1.5} direction="row">
              {languages.map((lang) => (
                <Link
                  inverted
                  to="/"
                  language={lang}
                  active={lang === language}
                  key={lang}
                >
                  {lang?.toUpperCase()}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={14}>
            <Stack direction="row" spacing={2}>
              <Stack spacing={6}>
                <Stack spacing={3}>
                  <Box sx={{ typography: "h1", color: "#fff" }}>
                    <Trans>
                      We are an IT team that makes fintech{" "}
                      <span style={{ color: "#FD932B" }}>accessible</span>
                    </Trans>
                  </Box>
                  <Box>
                    <Trans>
                      Our products are distributed by model{" "}
                      <span style={{ whiteSpace: "nowrap" }}>Open-Source</span>{" "}
                      Software and allow everyone to build their own business
                      based on our code.
                    </Trans>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <HeaderButton color="primary">
                    <Trans>Contact us</Trans>
                  </HeaderButton>
                  <a href={CONFIG.contacts.github} target="_blank">
                    <HeaderButton endIcon={<GitHubIcon />}>
                      <Trans>Our GitHub</Trans>
                    </HeaderButton>
                  </a>
                </Stack>
              </Stack>
              <Box>
                <Fintech />
              </Box>
            </Stack>

            <img src={ghSrc} style={{ width: 624 }} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />

      <Block id={PAGE_IDS.ourProducts} title={<Trans>Our products</Trans>}>
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

      <Block
        id={PAGE_IDS.processing}
        title={<Trans>Processing</Trans>}
        inverted
      >
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

      <AntifraudBlock id={PAGE_IDS.antifraud} />

      <Block id={PAGE_IDS.contacts} inverted>
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
