import { Block } from "../../components/Block";
import { Trans } from "gatsby-plugin-react-i18next";
import { Stack } from "@mui/system";
import { Card } from "../../components/Card";
import ProcessingImg from "../../assets/svg/processing.svg";
import FraudbustersImg from "../../assets/svg/fraudbusters.svg";
import * as React from "react";

export const AntifraudBlock: React.FC<React.ComponentProps<typeof Block>> = (
  props
) => {
  return (
    <Block {...props} title={<Trans>Antifraud</Trans>}>
      <Stack spacing={2} direction="row">
        <Card flex="1" image={<ProcessingImg />}>
          <Trans>antifraud.info:1</Trans>
        </Card>
        <Card flex="1" image={<FraudbustersImg />}>
          <Trans>antifraud.info:2</Trans>
        </Card>
        <Card flex="1" image={<FraudbustersImg />}>
          <Trans>antifraud.info:3</Trans>
        </Card>
      </Stack>
    </Block>
  );
};
