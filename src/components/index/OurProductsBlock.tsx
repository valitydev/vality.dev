import * as React from "react";

import { Stack, Box } from "@mui/system";
import { Trans } from "gatsby-plugin-react-i18next";

import FraudbustersImg from "~/assets/svg/fraudbusters.svg";
import ProcessingImg from "~/assets/svg/processing.svg";
import { Breakpoint } from "~/utils/breakpoint";
import { createLazySvg } from "~/utils/create-lazy-svg";
import { useBreakpointDown } from "~/utils/use-breakpoints";

import { Block } from "../Block";
import { Card } from "../Card";

const ApplicationImg = createLazySvg(
  () => import("~/assets/svg/application.svg"),
  () => import("~/assets/svg/application-lg.svg")
);

const BankIcon = createLazySvg(
  () => import("~/assets/svg/bank-icon.svg"),
  () => import("~/assets/svg/bank-icon-lg.svg")
);
const GatewayIcon = createLazySvg(
  () => import("~/assets/svg/gateway-icon.svg"),
  () => import("~/assets/svg/gateway-icon-lg.svg")
);
const ShopIcon = createLazySvg(
  () => import("~/assets/svg/shop-icon.svg"),
  () => import("~/assets/svg/shop-icon-lg.svg")
);

export const OurProductsBlock: React.FC<React.ComponentProps<typeof Block>> = ({
  ...props
}) => {
  const isDownLg = useBreakpointDown("lg");
  const iconSize = isDownLg ? 32 : 64;
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
          <Stack spacing={2} direction="row">
            <Stack spacing={5.5}>
              <Box sx={{ typography: "h3" }}>
                <Trans>For whom</Trans>
              </Box>
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
            <Breakpoint up="sm">
              <Box
                display="flex"
                alignItems="center"
                flex="1"
                justifyContent={isDownLg ? "center" : "end"}
              >
                <ApplicationImg height={isDownLg ? 150 : 300} />
              </Box>
            </Breakpoint>
          </Stack>
          <Breakpoint down="sm">
            <Box display="flex" justifyContent="center">
              <ApplicationImg height={150} />
            </Box>
          </Breakpoint>
        </Stack>
      </Stack>
    </Block>
  );
};
