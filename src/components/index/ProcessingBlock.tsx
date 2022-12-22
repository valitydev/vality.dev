import * as React from "react";
import { Block } from "../Block";
import { Trans } from "gatsby-plugin-react-i18next";
import { Stack, Box } from "@mui/system";
import { Card } from "../Card";
import ControlImg from "../../assets/svg/control.svg";
import CapabilityImg from "../../assets/svg/capability.svg";

export const ProcessingBlock: React.FC<
  React.ComponentProps<typeof Block>
> = () => (
  <Block title={<Trans>Processing</Trans>} inverted>
    <Stack spacing={17}>
      <Stack spacing={2} direction="row">
        <Card
          inverted
          flex="1"
          title={<Trans>Control</Trans>}
          image={<ControlImg />}
        >
          <Trans>
            control:description-1
            <br />
            control:description-2
          </Trans>
        </Card>
        <Card
          inverted
          flex="1"
          title={<Trans>Possibilities</Trans>}
          image={<CapabilityImg />}
        >
          <Trans>possibilities:description</Trans>
        </Card>
      </Stack>

      <Box>
        <Box sx={{ typography: "h3", color: "#fff" }}>
          <Trans>Support for all payment methods</Trans>
        </Box>
      </Box>

      <Box>
        <Box sx={{ typography: "h3", color: "#fff" }}>
          <Trans>Intuitive payment process</Trans>
        </Box>
      </Box>
    </Stack>
  </Block>
);
