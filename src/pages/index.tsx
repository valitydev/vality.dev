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

const PAGE_IDS = {
  ourProducts: "our-products",
  processing: "processing",
  antifraud: "antifraud",
  contacts: "contacts",
};

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
                <Trans>Our Products</Trans>
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
                  <HeaderButton>
                    <Trans>Our GitHub</Trans>
                  </HeaderButton>
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

      <Box id={PAGE_IDS.ourProducts}>
        <Trans>Our products</Trans>
      </Box>

      <Box id={PAGE_IDS.processing}>
        <Trans>Processing</Trans>
      </Box>

      <Box id={PAGE_IDS.antifraud}>
        <Trans>Antifraud</Trans>
      </Box>

      <Box id={PAGE_IDS.contacts}>
        <Trans>Contacts</Trans>
      </Box>
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
