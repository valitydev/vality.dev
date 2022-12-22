import { Block } from "../../components/Block";
import { Trans } from "gatsby-plugin-react-i18next";
import { Box } from "@mui/system";
import { Card } from "../Card";
import FlexibilityImg from "../../assets/svg/flexibility.svg";
import ScaleImg from "../../assets/svg/scale.svg";
import SafetySvg from "../../assets/svg/safety.svg";
import * as React from "react";
import Grid from "@mui/system/Unstable_Grid";

export const AntifraudBlock: React.FC<React.ComponentProps<typeof Block>> = (
  props
) => {
  return (
    <Block {...props} title={<Trans>Antifraud</Trans>}>
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
    </Block>
  );
};
