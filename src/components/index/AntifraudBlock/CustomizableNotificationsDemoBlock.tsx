import * as React from "react";

import { Box } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

import customizableBgSrc from "~/assets/images/customizable-bg.svg";
import imageSrc from "~/assets/images/customizable-notifications-clean.png";
import { BackgroundImageBox } from "~/components/BackgroundImageBox";
import { Breakpoint } from "~/utils/breakpoint";

import { DemoImageBlock, DemoImage } from "./DemoImageBlock";

export const CustomizableNotificationsDemoBlock = () => {
  return (
    <BackgroundImageBox src={customizableBgSrc} right={-100} bottom={-150}>
      <DemoImageBlock title={<Trans>Customizable notifications</Trans>}>
        <Breakpoint up="sm">
          <DemoImage
            topDescriptions={
              <>
                <Box flex={1}>
                  <Trans>Grouping rules for a more comfortable setup</Trans>
                </Box>
                <Box flex={1} textAlign="center">
                  <Trans>Sending alerts with a given frequency</Trans>
                </Box>
              </>
            }
            bottomDescriptions={
              <Box flex={1}>
                <Trans>
                  Different notification channels for different teams
                </Trans>
              </Box>
            }
          >
            <StaticImage
              src="../../../assets/images/customizable-notifications.png"
              alt=""
            />
          </DemoImage>
        </Breakpoint>
        <Breakpoint down="sm">
          <DemoImage
            topDescriptions={
              <>
                <Box flex={1}>
                  <Trans>Grouping rules for a more comfortable setup</Trans>
                </Box>
                <Box flex={1} textAlign="right">
                  <Trans>Sending alerts with a given frequency</Trans>
                </Box>
              </>
            }
            bottomDescriptions={
              <Box flex={1} textAlign="center">
                <Trans>
                  Different notification channels for different teams
                </Trans>
              </Box>
            }
            arrows={
              <StaticImage
                src="../../../assets/images/customizable-notifications-arrows-1.png"
                alt=""
              />
            }
          >
            <StaticImage
              src="../../../assets/images/customizable-notifications-clean.png"
              alt=""
            />
          </DemoImage>
          <DemoImage right imageSrc={imageSrc}>
            <StaticImage
              src="../../../assets/images/customizable-notifications-clean.png"
              alt=""
            />
          </DemoImage>
        </Breakpoint>
      </DemoImageBlock>
    </BackgroundImageBox>
  );
};
