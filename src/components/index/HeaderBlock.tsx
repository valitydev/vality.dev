import * as React from "react";

import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

import headerBgGlowingBallSrc from "~/assets/images/header-bg-glowing-ball.svg";
import UnstyledFintech from "~/assets/svg/fintech.svg";
import GitHubIcon from "~/assets/svg/github.svg";
import UnstyledLogo from "~/assets/svg/logo.svg";
import { useBreakpointDown, useBreakpointUp } from "~/utils/use-breakpoints";

import CONFIG from "../../../config.json";
import { AppNav, PAGE_IDS } from "../AppNav";
import { Block } from "../Block";
import { Button } from "../Button";
import { LanguageSelector } from "../LanguageSelector";

const Logo = styled(UnstyledLogo)`
  width: auto;
  height: 32px;

  ${({ theme }) => theme?.breakpoints?.down?.("lg")} {
    height: 24px;
  }
`;

const Fintech = styled(UnstyledFintech)`
  margin-right: -52px;
  margin-top: -20px;
  height: 330px;

  ${({ theme }) => theme?.breakpoints?.down?.("md")} {
    margin-right: -100px;
  }

  ${({ theme }) => theme?.breakpoints?.down?.("lg")} {
    height: 192px;
  }
`;

const HeaderButton = styled(Button)`
  padding: 0 ${({ theme, children }) => theme?.spacing?.(children ? 6.5 : 0)};
`;

export const HeaderBlock: React.FC<React.ComponentProps<typeof Block>> = (
  props
) => {
  const isMobile = useBreakpointDown("sm");
  const isLaptop = useBreakpointDown("md");
  const isLg = useBreakpointUp("lg");

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
      <Stack spacing={9}>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          alignItems="center"
          sx={{ pt: 2.5, pb: 2.25 }}
        >
          <Logo />
          {isLaptop ? (
            <Stack direction="row" spacing={2}>
              <LanguageSelector small />
              <AppNav small />
            </Stack>
          ) : (
            <Stack direction="row" spacing={isLg ? 13.5 : 7}>
              <AppNav />
              <LanguageSelector />
            </Stack>
          )}
        </Stack>

        <Stack spacing={14}>
          <Stack spacing={6}>
            <Stack direction="row" spacing={2}>
              <Stack spacing={3}>
                <Box sx={{ typography: "h1", color: "#fff" }}>
                  <Trans>
                    We are an IT team
                    <br />
                    that makes fintech
                    <br />
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
              {!isMobile && (
                <Box>
                  <Fintech />
                </Box>
              )}
            </Stack>

            <Stack direction="row" spacing={3}>
              <HeaderButton
                size="large"
                color="primary"
                variant="contained"
                href={`/#${PAGE_IDS.contacts}`}
                target="_self"
                style={isMobile ? { width: "100%" } : {}}
              >
                <Trans>Contact us</Trans>
              </HeaderButton>
              <a href={CONFIG.contacts.github} target="_blank" rel="noreferrer">
                <HeaderButton
                  size="large"
                  variant="contained"
                  endIcon={<GitHubIcon />}
                >
                  {!isLaptop && <Trans>Our GitHub</Trans>}
                </HeaderButton>
              </a>
            </Stack>
          </Stack>

          {isMobile ? (
            <Box>
              <Fintech style={{ marginBottom: -50, marginLeft: 150 }} />
            </Box>
          ) : (
            <Box height={185}>
              <StaticImage
                alt="Vality GitHub"
                placeholder="blurred"
                style={{
                  borderRadius: "8px 8px 0 0",
                }}
                src="../../assets/images/gh.png"
                width={624}
              />
            </Box>
          )}
        </Stack>
      </Stack>
    </Block>
  );
};
