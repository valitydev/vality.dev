import * as React from "react";
import { Block } from "../Block";
import { Trans } from "gatsby-plugin-react-i18next";
import { Stack, Box } from "@mui/system";
import { Card } from "../Card";
import ProcessingImg from "../../assets/svg/processing.svg";
import FraudbustersImg from "../../assets/svg/fraudbusters.svg";
import ShopIcon from "../../assets/svg/shop-icon.svg";
import BankIcon from "../../assets/svg/bank-icon.svg";
import GatewayIcon from "../../assets/svg/gateway-icon.svg";
import ApplicationsImg from "../../assets/svg/application.svg";

export const OurProductsBlock: React.FC<React.ComponentProps<typeof Block>> = ({
  ...props
}) => (
  <Block {...props} title={<Trans>Our products</Trans>}>
    <Stack spacing={17}>
      <Stack spacing={2} direction="row">
        <Card
          flex="1"
          title={<Trans>Processing</Trans>}
          image={<ProcessingImg />}
        >
          <Trans>processing:description</Trans>
        </Card>
        <Card
          flex="1"
          title={<Trans>Antifraud</Trans>}
          image={<FraudbustersImg />}
        >
          <Trans>antifraud:description</Trans>
        </Card>
      </Stack>

      <Stack direction="row">
        <Stack flex={1} spacing={5.5}>
          <Box sx={{ typography: "h3" }}>
            <Trans>For whom</Trans>
          </Box>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box width={64} height={64}>
                <ShopIcon />
              </Box>
              <Box>
                <Trans>Online stores and large retailers</Trans>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box width={64} height={64}>
                <BankIcon />
              </Box>
              <Box>
                <Trans>Processing solution for banks</Trans>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box width={64} height={64}>
                <GatewayIcon />
              </Box>
              <Box>
                <Trans>Payment gateways</Trans>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Box flex={1}>
          <ApplicationsImg />
        </Box>
      </Stack>
    </Stack>
  </Block>
);
