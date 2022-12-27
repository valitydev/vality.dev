import * as React from "react";

import { Box, Stack } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { Trans } from "gatsby-plugin-react-i18next";

import FlexibilityImg from "~/assets/svg/flexibility.svg";
import SafetySvg from "~/assets/svg/safety.svg";
import ScaleImg from "~/assets/svg/scale.svg";

import antifraudBgSrc from "../../images/antifraud-bg.svg";
import customizableBgSrc from "../../images/customizable-bg.svg";
import customizableNotificationsSrc from "../../images/customizable-notifications.png";
import dashboardInRealTimeSrc from "../../images/dashboard-in-real-time.png";
import flexibilityBgSrc from "../../images/flexibility-bg.svg";
import flexibleSystemOfRulesSrc from "../../images/flexible-system-of-rules.png";
import { BackgroundImageBox } from "../BackgroundImageBox";
import { Block } from "../Block";
import { Card } from "../Card";

export const AntifraudBlock: React.FC<React.ComponentProps<typeof Block>> = (
  props
) => {
  return (
    <Block {...props} title={<Trans>Antifraud</Trans>}>
      <Stack spacing={17}>
        <BackgroundImageBox src={antifraudBgSrc} left={-450} top={-200}>
          <Grid spacing={2} container>
            <Grid xs={4}>
              <Card
                height="100%"
                boxSizing="border-box"
                image={
                  <Box display="flex" height={222}>
                    <FlexibilityImg />
                  </Box>
                }
              >
                <Trans>antifraud.info:flexibility</Trans>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card
                height="100%"
                boxSizing="border-box"
                image={
                  <Box display="flex" height={222}>
                    <ScaleImg />
                  </Box>
                }
              >
                <Trans>antifraud.info:scale</Trans>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card
                height="100%"
                boxSizing="border-box"
                image={
                  <Box display="flex" height={222}>
                    <SafetySvg />
                  </Box>
                }
              >
                <Trans>antifraud.info:safety</Trans>
              </Card>
            </Grid>
          </Grid>
        </BackgroundImageBox>

        <Stack spacing={5.5}>
          <Box sx={{ typography: "h3" }}>
            <Trans>Dashboard in real time</Trans>
          </Box>
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
            <img
              src={dashboardInRealTimeSrc}
              style={{ width: "100%", height: "100%" }}
            />
            <Stack spacing={3} alignItems="top" direction="row">
              <Box flex="0 1 35%" sx={{ textAlign: "center" }}>
                <Trans>Historical data per day</Trans>
              </Box>
            </Stack>
          </Stack>
        </Stack>

        <BackgroundImageBox src={flexibilityBgSrc} left={-400} top={-30}>
          <Stack spacing={5.5}>
            <Box sx={{ typography: "h3" }}>
              <Trans>Flexible system of rules</Trans>
            </Box>
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
              <img
                src={flexibleSystemOfRulesSrc}
                style={{ width: "100%", height: "100%" }}
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
          </Stack>
        </BackgroundImageBox>

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
                  <Trans>
                    Different notification channels for different teams
                  </Trans>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </BackgroundImageBox>
      </Stack>
    </Block>
  );
};
