import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { Box, Container, Stack } from "@mui/system";
import headerBgGlowingBallSrc from "../../images/header-bg-glowing-ball.svg";
import CONFIG from "../../../config.json";
import GitHubIcon from "../../assets/svg/github.svg";
import ghSrc from "../../images/gh.png";
import styled from "@emotion/styled";
import UnstyledLogo from "../../assets/svg/logo.svg";
import UnstyledFintech from "../../assets/svg/fintech.svg";
import { Button } from "../Button";
import { Block } from "../Block";
import { LanguageSelector } from "../LanguageSelector";
import { AppNav } from "../AppNav";

const Logo = styled(UnstyledLogo)`
  width: auto;
  height: 32px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    height: 24px;
  }
`;

const Fintech = styled(UnstyledFintech)`
  margin-right: -100px;
  margin-top: -20px;
  height: 330px;

  ${({ theme }) => theme?.breakpoints.down("lg")} {
    height: 192px;
  },
`;

const HeaderButton = styled(Button)`
  padding-left: ${({ theme }) => theme.spacing(6.5)};
  padding-right: ${({ theme }) => theme.spacing(6.5)};
`;

export const HeaderBlock: React.FC<React.ComponentProps<typeof Block>> = (
  props
) => {
  return (
    <Block
      inverted
      sx={{
        padding: "0px !important",
        backgroundImage: `url(${headerBgGlowingBallSrc})`,
        backgroundPosition: "calc(50% + 400px) 0%",
        backgroundRepeat: "no-repeat",
      }}
      {...props}
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
            <AppNav />
            <LanguageSelector />
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
    </Block>
  );
};
