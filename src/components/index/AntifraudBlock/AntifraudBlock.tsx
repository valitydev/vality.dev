import * as React from "react";

import { Stack } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { Trans } from "gatsby-plugin-react-i18next";

import antifraudBgSrc from "~/assets/images/antifraud-bg.svg";
import FlexibilityImg from "~/assets/svg/flexibility.svg";
import SafetySvg from "~/assets/svg/safety.svg";
import ScaleImg from "~/assets/svg/scale.svg";
import { BackgroundImageBox } from "~/components/BackgroundImageBox";
import { Block } from "~/components/Block";
import { Card } from "~/components/Card";

import { CustomizableNotificationsDemoBlock } from "./CustomizableNotificationsDemoBlock";
import { DashboardInRealTimeDemoBlock } from "./DashboardInRealTimeDemoBlock";
import { FlexibleSystemOfRulesDemoBlock } from "./FlexibleSystemOfRulesDemoBlock";

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
                image={<FlexibilityImg height={160} />}
              >
                <Trans>antifraud.info:flexibility</Trans>
              </Card>
            </Grid>
            <Grid lg={4} sm={12}>
              <Card
                height="100%"
                boxSizing="border-box"
                image={<ScaleImg height={160} />}
              >
                <Trans>antifraud.info:scale</Trans>
              </Card>
            </Grid>
            <Grid lg={4} sm={12}>
              <Card
                height="100%"
                boxSizing="border-box"
                image={<SafetySvg height={160} />}
              >
                <Trans>antifraud.info:safety</Trans>
              </Card>
            </Grid>
          </Grid>
        </BackgroundImageBox>

        <DashboardInRealTimeDemoBlock />
        <FlexibleSystemOfRulesDemoBlock />
        <CustomizableNotificationsDemoBlock />
      </Stack>
    </Block>
  );
};
