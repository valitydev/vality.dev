import * as React from "react";

import { Box, Stack } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

import antifraudBgSrc from "~/assets/images/antifraud-bg.svg";
import customizableBgSrc from "~/assets/images/customizable-bg.svg";
import customizableNotificationsSrc from "~/assets/images/customizable-notifications.png";
import flexibilityBgSrc from "~/assets/images/flexibility-bg.svg";
import FlexibilityImg from "~/assets/svg/flexibility.svg";
import SafetySvg from "~/assets/svg/safety.svg";
import ScaleImg from "~/assets/svg/scale.svg";
import { Breakpoint } from "~/utils/breakpoint";

import { BackgroundImageBox } from "../BackgroundImageBox";
import { Block } from "../Block";
import { Card } from "../Card";

const DashboardInRealTime = () => {
  return (
    <Stack spacing={5.5}>
      <Box sx={{ typography: "h3" }}>
        <Trans>Dashboard in real time</Trans>
      </Box>
      <Breakpoint up="sm">
        <Stack spacing={1.5}>
          <Stack spacing={3} alignItems="end" direction="row">
            <Box flex={1}>
              <Trans>
                Number of payments
                <br />
                for the selected period
              </Trans>
            </Box>
            <Box flex={1} sx={{ textAlign: "center" }}>
              <Trans>Percent blocked transaction system</Trans>
            </Box>
            <Box flex={1} sx={{ textAlign: "right" }}>
              <Trans>Amount of blocked payments</Trans>
            </Box>
          </Stack>
          <StaticImage
            src="../../assets/images/dashboard-in-real-time.png"
            style={{ width: "100%" }}
            alt=""
          />
          <Stack spacing={3} alignItems="top" direction="row">
            <Box flex="0 1 35%" sx={{ textAlign: "center" }}>
              <Trans>Historical data per day</Trans>
            </Box>
          </Stack>
        </Stack>
      </Breakpoint>
      <Breakpoint down="sm">
        <Stack spacing={1.5}>
          <Stack spacing={3} alignItems="end" direction="row">
            <Box flex={1}>
              <Trans>
                Number of payments
                <br />
                for the selected period
              </Trans>
            </Box>
          </Stack>
          <Box style={{ position: "relative" }}>
            <StaticImage
              alt=""
              src="../../assets/images/dashboard-in-real-time-clean.png"
              style={{ width: "200%" }}
            />
            <StaticImage
              style={{ position: "absolute", top: -12, width: "200%" }}
              src="../../assets/images/dashboard-in-real-time-arrows-1.png"
              alt=""
            />
          </Box>
          <Stack spacing={3} alignItems="top" direction="row">
            <Box flex="1" sx={{ textAlign: "center" }}>
              <Trans>Historical data per day</Trans>
            </Box>
          </Stack>
        </Stack>
        <Stack spacing={1.5}>
          <Stack spacing={3} alignItems="end" direction="row">
            <Box flex={1}>
              <Trans>Percent blocked transaction system</Trans>
            </Box>
            <Box flex={1} sx={{ textAlign: "right" }}>
              <Trans>Amount of blocked payments</Trans>
            </Box>
          </Stack>
          <Box style={{ position: "relative" }}>
            <StaticImage
              alt=""
              src="../../assets/images/dashboard-in-real-time-clean.png"
              style={{ width: "200%", marginLeft: "-100%" }}
            />
            <StaticImage
              style={{
                position: "absolute",
                top: -12,
                right: 0,
                width: "200%",
              }}
              src="../../assets/images/dashboard-in-real-time-arrows-2.png"
              alt=""
            />
          </Box>
        </Stack>
      </Breakpoint>
    </Stack>
  );
};

const Flexibility = () => {
  return (
    <BackgroundImageBox src={flexibilityBgSrc} left={-400} top={-30}>
      <Stack spacing={5.5}>
        <Box sx={{ typography: "h3" }}>
          <Trans>Flexible system of rules</Trans>
        </Box>
        <Breakpoint up="sm">
          <Stack spacing={1.5}>
            <Stack spacing={3} alignItems="end" direction="row">
              <Box flex={1}>
                <Trans>
                  Black, white and gray lists according to various criteria
                </Trans>
              </Box>
              <Box flex={1} sx={{ textAlign: "right" }}>
                <Trans>
                  Country restrictions, currencies, payer location, etc.
                </Trans>
              </Box>
            </Stack>
            <StaticImage
              src="../../assets/images/flexible-system-of-rules.png"
              style={{ width: "100%" }}
              alt=""
            />
            <Stack spacing={3} alignItems="top" direction="row">
              <Box flex={1}>
                <Trans>
                  Making a decision based on any available system payment
                  parameters
                </Trans>
              </Box>
              <Box flex={1} sx={{ textAlign: "center" }}>
                <Trans>Complex custom rules</Trans>
              </Box>
            </Stack>
          </Stack>
        </Breakpoint>
        <Breakpoint down="sm">
          <Stack spacing={1.5}>
            <Stack spacing={3} alignItems="end" direction="row">
              <Box flex={1} textAlign="center">
                <Trans>
                  Black, white and gray lists according to various criteria
                </Trans>
              </Box>
            </Stack>
            <Box style={{ position: "relative" }}>
              <StaticImage
                alt=""
                src="../../assets/images/flexibility-clean.png"
                style={{ width: "200%" }}
              />
              <StaticImage
                style={{ position: "absolute", top: -12, width: "200%" }}
                src="../../assets/images/flexibility-arrows-1.png"
                alt=""
              />
            </Box>
            <Stack spacing={3} alignItems="top" direction="row">
              <Box flex={1}>
                <Trans>
                  Making a decision based on any available system payment
                  parameters
                </Trans>
              </Box>
            </Stack>
          </Stack>
          <Stack spacing={1.5}>
            <Stack spacing={3} alignItems="end" direction="row">
              <Box flex={1} sx={{ textAlign: "right" }}>
                <Trans>
                  Country restrictions, currencies, payer location, etc.
                </Trans>
              </Box>
            </Stack>
            <Box style={{ position: "relative" }}>
              <StaticImage
                alt=""
                src="../../assets/images/flexibility-clean.png"
                style={{ width: "200%", marginLeft: "-100%" }}
              />
              <StaticImage
                style={{
                  position: "absolute",
                  top: -12,
                  right: 0,
                  width: "200%",
                }}
                src="../../assets/images/flexibility-arrows-2.png"
                alt=""
              />
            </Box>
            <Stack spacing={3} alignItems="top" direction="row">
              <Box flex={1}>
                <Trans>Complex custom rules</Trans>
              </Box>
            </Stack>
          </Stack>
        </Breakpoint>
      </Stack>
    </BackgroundImageBox>
  );
};

const Customizable = () => {
  return (
    <BackgroundImageBox src={customizableBgSrc} right={-100} bottom={-150}>
      <Stack spacing={5.5}>
        <Box sx={{ typography: "h3" }}>
          <Trans>Customizable notifications</Trans>
        </Box>
        <Stack spacing={1.5}>
          <Stack spacing={3} alignItems="end" direction="row">
            <Box flex={1}>
              <Trans>Grouping rules for a more comfortable setup</Trans>
            </Box>
            <Box flex={1} sx={{ textAlign: "center" }}>
              <Trans>Sending alerts with a given frequency</Trans>
            </Box>
          </Stack>
          <img
            src={customizableNotificationsSrc}
            style={{ width: "100%", height: "100%" }}
          />
          <Stack spacing={3} alignItems="top" direction="row">
            <Box flex={1}>
              <Trans>Different notification channels for different teams</Trans>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </BackgroundImageBox>
  );
};

export const AntifraudBlock: React.FC<React.ComponentProps<typeof Block>> = (
  props
) => {
  return (
    <Block {...props} title={<Trans>Antifraud</Trans>}>
      <Stack spacing={17}>
        <BackgroundImageBox src={antifraudBgSrc} left={-450} top={-200}>
          <Grid spacing={2} container>
            <Grid lg={4} sm={12}>
              <Card
                height="100%"
                boxSizing="border-box"
                image={<FlexibilityImg height={160} width="auto" />}
              >
                <Trans>antifraud.info:flexibility</Trans>
              </Card>
            </Grid>
            <Grid lg={4} sm={12}>
              <Card
                height="100%"
                boxSizing="border-box"
                image={<ScaleImg height={160} width="auto" />}
              >
                <Trans>antifraud.info:scale</Trans>
              </Card>
            </Grid>
            <Grid lg={4} sm={12}>
              <Card
                height="100%"
                boxSizing="border-box"
                image={<SafetySvg height={160} width="auto" />}
              >
                <Trans>antifraud.info:safety</Trans>
              </Card>
            </Grid>
          </Grid>
        </BackgroundImageBox>

        <DashboardInRealTime />
        <Flexibility />
        <Customizable />
      </Stack>
    </Block>
  );
};

export default AntifraudBlock;
