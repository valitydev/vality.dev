import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import UnstyledLogo from "../assets/svg/logo.svg";
import { Container, Box, Stack, styled, Theme } from "@mui/system";
import UnstyledFintech from "../assets/svg/fintech.svg";
import headerBgGlowingBallSrc from "../images/header-bg-glowing-ball.svg";
import ghSrc from "../images/gh.png";
import { Button } from "../components/Button";
import { Trans } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

const Logo = styled(UnstyledLogo)(({ theme }: { theme: Theme }) => ({
  width: "auto",
  height: 32,

  [theme.breakpoints.down("lg")]: {
    height: 24,
  },
}));

const Fintech = styled(UnstyledFintech)(({ theme }: { theme: Theme }) => ({
  marginRight: -47,
  marginTop: -20,
  height: 330,

  [theme?.breakpoints.down("lg")]: {
    height: 192,
  },
}));

const Header: React.FC = () => {
  return (
    <>
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
              <Stack direction="row" spacing={2}>
                <Box>Наши продукты</Box>
                <Box>Процессинг</Box>
                <Box>Антифрод</Box>
                <Box>Контакты</Box>
              </Stack>
              <Box>RU | EN</Box>
            </Stack>

            <Stack spacing={14}>
              <Stack direction="row" spacing={2}>
                <Stack spacing={6}>
                  <Stack spacing={3}>
                    <Box sx={{ typography: "h1" }}>
                      Мы it-команда, делающая fintech{" "}
                      <span style={{ color: "#FD932B" }}>доступным</span>
                    </Box>
                    <Box>
                      Наши продукты распространяются по модели{" "}
                      <span style={{ whiteSpace: "nowrap" }}>Open-Source</span>{" "}
                      Software и позволяют каждому построить свой бизнес на
                      основе нашего кода.
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={3}>
                    <Button>
                      <Trans>Contact us</Trans>
                    </Button>
                    <Button>Наш GitHub</Button>
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
    </>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
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
