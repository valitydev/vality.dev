import * as React from "react";

import { Box } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

import imageSrc from "~/assets/images/dashboard-in-real-time-clean.png";
import { Breakpoint } from "~/utils/breakpoint";

import { DemoImageBlock, DemoImage } from "./DemoImageBlock";

export const DashboardInRealTimeDemoBlock = () => {
  return (
    <DemoImageBlock title={<Trans>Dashboard in real time</Trans>}>
      <Breakpoint up="sm">
        <DemoImage
          topDescriptions={
            <>
              <Box flex={1}>
                <Trans>
                  Number of payments
                  <br />
                  for the selected period
                </Trans>
              </Box>
              <Box flex={1} textAlign="center">
                <Trans>Percent blocked transaction system</Trans>
              </Box>
              <Box flex={1} textAlign="right">
                <Trans>Amount of blocked payments</Trans>
              </Box>
            </>
          }
          bottomDescriptions={
            <Box flex="0 1 35%" textAlign="center">
              <Trans>Historical data per day</Trans>
            </Box>
          }
        >
          <StaticImage
            src="../../../assets/images/dashboard-in-real-time.png"
            alt=""
          />
        </DemoImage>
      </Breakpoint>
      <Breakpoint down="sm">
        <DemoImage
          topDescriptions={
            <Box flex={1}>
              <Trans>
                Number of payments
                <br />
                for the selected period
              </Trans>
            </Box>
          }
          bottomDescriptions={
            <Box flex="1" textAlign="center">
              <Trans>Historical data per day</Trans>
            </Box>
          }
          arrows={
            <StaticImage
              src="../../../assets/images/dashboard-in-real-time-arrows-1.png"
              alt=""
            />
          }
        >
          <StaticImage
            alt=""
            src="../../../assets/images/dashboard-in-real-time-clean.png"
          />
        </DemoImage>
        <DemoImage
          topDescriptions={
            <>
              <Box flex={1}>
                <Trans>Percent blocked transaction system</Trans>
              </Box>
              <Box flex={1} textAlign="right">
                <Trans>Amount of blocked payments</Trans>
              </Box>
            </>
          }
          arrows={
            <StaticImage
              src="../../../assets/images/dashboard-in-real-time-arrows-2.png"
              alt=""
            />
          }
          right
          imageSrc={imageSrc}
        >
          <StaticImage
            alt=""
            src="../../../assets/images/dashboard-in-real-time-clean.png"
          />
        </DemoImage>
      </Breakpoint>
    </DemoImageBlock>
  );
};
