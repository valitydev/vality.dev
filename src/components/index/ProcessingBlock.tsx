import * as React from "react";
import { Block } from "../Block";
import { Trans } from "gatsby-plugin-react-i18next";
import { Stack, Box } from "@mui/system";
import { Card } from "../Card";
import ControlImg from "../../assets/svg/control.svg";
import CapabilityImg from "../../assets/svg/capability.svg";
import VisaIcon from "../../assets/svg/visa-icon.svg";
import MirIcon from "../../assets/svg/mir-icon.svg";
import GoogleIcon from "../../assets/svg/google-icon.svg";
import SbpIcon from "../../assets/svg/sbp-icon.svg";
import MastercardIcon from "../../assets/svg/mastercard-icon.svg";
import AppleIcon from "../../assets/svg/apple-icon.svg";
import MobileIcon from "../../assets/svg/mobile-icon.svg";
import EwalletIcon from "../../assets/svg/ewallet-icon.svg";
import CryptoIcon from "../../assets/svg/crypto-icon.svg";
import SamsungPayIcon from "../../assets/svg/samsung-pay-icon.svg";
import UnionPayIcon from "../../assets/svg/union-pay-icon.svg";
import { Chip } from "../Chip";

const PAYMENT_METHODS_GROUPS = [
  [
    { icon: <VisaIcon /> },
    { name: "MasterCard", icon: <MastercardIcon /> },
    { name: <Trans>MIR</Trans>, icon: <MirIcon /> },
    { name: <Trans>Faster Payments System (SBP)</Trans>, icon: <SbpIcon /> },
  ],
  [
    { name: "GooglePay", icon: <GoogleIcon /> },
    { name: "ApplePay", icon: <AppleIcon /> },
    { name: "UnionPay", icon: <UnionPayIcon /> },
    { name: "SamsungPay", icon: <SamsungPayIcon /> },
  ],
  [
    { name: <Trans>SMS / Mobile Commerce</Trans>, icon: <MobileIcon /> },
    { name: <Trans>Electronic money</Trans>, icon: <EwalletIcon /> },
    { name: <Trans>Cryptocurrencies</Trans>, icon: <CryptoIcon /> },
  ],
];

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

      <Stack spacing={5.5}>
        <Box sx={{ typography: "h3", color: "#fff" }}>
          <Trans>Support for all payment methods</Trans>
        </Box>
        <Stack spacing={2.5}>
          {PAYMENT_METHODS_GROUPS.map((group, idx) => (
            <Stack spacing={2} direction="row" key={idx}>
              {group.map((pm, k) => (
                <Chip key={k} startIcon={pm.icon}>
                  {pm.name}
                </Chip>
              ))}
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Box>
        <Box sx={{ typography: "h3", color: "#fff" }}>
          <Trans>Intuitive payment process</Trans>
        </Box>
      </Box>
    </Stack>
  </Block>
);
