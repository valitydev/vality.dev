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
import caruselSrc from "../../images/carusel.png";
import processingBgSrc from "../../images/processing-bg.svg";
import paymentSystemsBgSrc from "../../images/payment-systems-bg.svg";
import paymentBgSrc from "../../images/payment-bg.svg";
import { css } from "@emotion/css";
import { BackgroundImageBox } from "../BackgroundImageBox";

const PAYMENT_METHODS_GROUPS = [
  [
    { icon: <VisaIcon /> },
    { name: "MasterCard", icon: <MastercardIcon /> },
    { icon: <MirIcon /> },
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

export const ProcessingBlock: React.FC<React.ComponentProps<typeof Block>> = (
  props
) => (
  <Block {...props} title={<Trans>Processing</Trans>} inverted>
    <Stack spacing={17}>
      <BackgroundImageBox src={processingBgSrc} left={-765} top={-200}>
        <Stack
          spacing={2}
          direction="row"
          className={css`
            position: relative;
            z-index: 1;
          `}
        >
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
      </BackgroundImageBox>

      <BackgroundImageBox src={paymentSystemsBgSrc} right={-500} top={-100}>
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
      </BackgroundImageBox>

      <BackgroundImageBox src={paymentBgSrc} left={-450} bottom={-200}>
        <Stack spacing={5.5}>
          <Box sx={{ typography: "h3", color: "#fff" }}>
            <Trans>Intuitive payment process</Trans>
          </Box>
          <Box>
            <img style={{ width: "100%", height: "100%" }} src={caruselSrc} />
          </Box>
        </Stack>
      </BackgroundImageBox>
    </Stack>
  </Block>
);
