import * as React from "react";

import { Stack, Box } from "@mui/system";
import { Trans } from "gatsby-plugin-react-i18next";

import ApplicationsImg from "~/assets/svg/application.svg";
import BankIcon from "~/assets/svg/bank-icon.svg";
import FraudbustersImg from "~/assets/svg/fraudbusters.svg";
import GatewayIcon from "~/assets/svg/gateway-icon.svg";
import ProcessingImg from "~/assets/svg/processing.svg";
import ShopIcon from "~/assets/svg/shop-icon.svg";
import { useBreakpointDown } from "~/utils/use-breakpoints";

import { Block } from "../Block";
import { Card } from "../Card";

export const OurProductsBlock: React.FC<React.ComponentProps<typeof Block>> = ({
  ...props
}) => {
  const isMobile = useBreakpointDown("sm");
  const isLaptop = useBreakpointDown("lg");
  const iconSize = isLaptop ? 32 : 64;
  return (
    <Block {...props} title={<Trans>Our products</Trans>}>
      <Stack spacing={17}>
        <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
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

        <Stack spacing={8}>
          <Stack spacing={4} direction="row" justifyContent="space-between">
            <Stack spacing={5.5}>
              <Box sx={{ typography: "h3" }}>
                <Trans>For whom</Trans>
              </Box>
              <Stack direction="row" spacing="1">
                <Stack spacing={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <ShopIcon width={iconSize} height={iconSize} />
                    <Box>
                      <Trans>Online stores and large retailers</Trans>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <BankIcon width={iconSize} height={iconSize} />
                    <Box>
                      <Trans>Processing solution for banks</Trans>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <GatewayIcon width={iconSize} height={iconSize} />
                    <Box>
                      <Trans>Payment gateways</Trans>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            {!isMobile && (
              <Box>
                <ApplicationsImg height={300} />
              </Box>
            )}
          </Stack>
          {isMobile && (
            <Box>
              <ApplicationsImg height={150} />
            </Box>
          )}
        </Stack>
      </Stack>
    </Block>
  );
};

export default OurProductsBlock;
