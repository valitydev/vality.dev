import * as React from "react";

import { Box } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

import flexibilityBgSrc from "~/assets/images/flexibility-bg.svg";
import imageSrc from "~/assets/images/flexibility-clean.png";
import { BackgroundImageBox } from "~/components/BackgroundImageBox";
import { Breakpoint } from "~/utils/breakpoint";

import { DemoImageBlock, DemoImage } from "./DemoImageBlock";

export const FlexibleSystemOfRulesDemoBlock = () => {
  return (
    <BackgroundImageBox src={flexibilityBgSrc} left={-400} top={-30}>
      <DemoImageBlock title={<Trans>Flexible system of rules</Trans>}>
        <Breakpoint up="sm">
          <DemoImage
            topDescriptions={
              <>
                {" "}
                <Box flex={1}>
                  <Trans>
                    Black, white and gray lists according to various criteria
                  </Trans>
                </Box>
                <Box flex={1} textAlign="right">
                  <Trans>
                    Country restrictions, currencies, payer location, etc.
                  </Trans>
                </Box>
              </>
            }
            bottomDescriptions={
              <>
                <Box flex={1}>
                  <Trans>
                    Making a decision based on any available system payment
                    parameters
                  </Trans>
                </Box>
                <Box flex={1} textAlign="center">
                  <Trans>Complex custom rules</Trans>
                </Box>
              </>
            }
          >
            <StaticImage
              src="../../../assets/images/flexible-system-of-rules.png"
              alt=""
            />
          </DemoImage>
        </Breakpoint>
        <Breakpoint down="sm">
          <DemoImage
            topDescriptions={
              <Box flex={1} textAlign="center">
                <Trans>
                  Black, white and gray lists according to various criteria
                </Trans>
              </Box>
            }
            bottomDescriptions={
              <Box flex={1}>
                <Trans>
                  Making a decision based on any available system payment
                  parameters
                </Trans>
              </Box>
            }
            arrows={
              <StaticImage
                src="../../../assets/images/flexibility-arrows-1.png"
                alt=""
              />
            }
          >
            <StaticImage
              alt=""
              src="../../../assets/images/flexibility-clean.png"
            />
          </DemoImage>
          <DemoImage
            topDescriptions={
              <Box flex={1} textAlign="right">
                <Trans>
                  Country restrictions, currencies, payer location, etc.
                </Trans>
              </Box>
            }
            bottomDescriptions={
              <Box flex={1}>
                <Trans>Complex custom rules</Trans>
              </Box>
            }
            arrows={
              <StaticImage
                src="../../../assets/images/flexibility-arrows-2.png"
                alt=""
              />
            }
            imageSrc={imageSrc}
            right
          >
            <StaticImage
              alt=""
              src="../../../assets/images/flexibility-clean.png"
            />
          </DemoImage>
        </Breakpoint>
      </DemoImageBlock>
    </BackgroundImageBox>
  );
};
