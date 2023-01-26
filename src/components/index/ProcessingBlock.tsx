import * as React from "react";

import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Stack, Box } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

import paymentBgSrc from "~/assets/images/payment-bg.svg";
import paymentSystemsBgSrc from "~/assets/images/payment-systems-bg.svg";
import processingBgSrc from "~/assets/images/processing-bg.svg";
import AppleIcon from "~/assets/svg/apple-icon.svg";
import CapabilityImg from "~/assets/svg/capability.svg";
import ControlImg from "~/assets/svg/control.svg";
import CryptoIcon from "~/assets/svg/crypto-icon.svg";
import EwalletIcon from "~/assets/svg/ewallet-icon.svg";
import GoogleIcon from "~/assets/svg/google-icon.svg";
import MastercardIcon from "~/assets/svg/mastercard-icon.svg";
import MirIcon from "~/assets/svg/mir-icon.svg";
import MobileIcon from "~/assets/svg/mobile-icon.svg";
import SamsungPayIcon from "~/assets/svg/samsung-pay-icon.svg";
import SbpIcon from "~/assets/svg/sbp-icon.svg";
import UnionPayIcon from "~/assets/svg/union-pay-icon.svg";
import VisaIcon from "~/assets/svg/visa-icon.svg";
import { Carousel } from "~/components/Carousel";

import { BackgroundImageBox } from "../BackgroundImageBox";
import { Block } from "../Block";
import { Card } from "../Card";
import { Chip } from "../Chip";

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

const AutoHideBr = styled.br`
  ${({ theme }) => theme?.breakpoints?.down?.("xl")} {
    display: none;
  }
`;

export const ProcessingBlock: React.FC<React.ComponentProps<typeof Block>> = (
  props
) => {
  const carouselWidth = 464;

  return (
    <Block {...props} title={<Trans>Processing</Trans>} inverted>
      <Stack spacing={17}>
        <BackgroundImageBox src={processingBgSrc} left={-765} top={-200}>
          <Stack
            spacing={2}
            direction={{ xs: "column", md: "row" }}
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
              <Stack spacing={1}>
                <Box>
                  <Trans>control:description-1</Trans>
                </Box>
                <Box>
                  <Trans>control:description-2</Trans>
                </Box>
              </Stack>
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
            <Box>
              <Box marginBottom={-2.5}>
                {PAYMENT_METHODS_GROUPS.map((group, idx) => (
                  <React.Fragment key={idx}>
                    {group.map((pm, k) => (
                      <Box display="inline-block" key={k}>
                        <Chip
                          startIcon={pm.icon}
                          marginBottom={2.5}
                          marginRight={2}
                        >
                          {pm.name}
                        </Chip>
                      </Box>
                    ))}
                    <AutoHideBr />
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Stack>
        </BackgroundImageBox>

        <BackgroundImageBox src={paymentBgSrc} left={-450} bottom={-200}>
          <Stack spacing={5.5}>
            <Box sx={{ typography: "h3", color: "#fff" }}>
              <Trans>Intuitive payment process</Trans>
            </Box>
            <Box>
              <Carousel
                width={carouselWidth}
                images={[
                  <StaticImage
                    alt="Select payment method"
                    placeholder="blurred"
                    src="../../assets/images/carousel-1.png"
                    width={carouselWidth}
                  />,
                  <StaticImage
                    alt="Bank card"
                    placeholder="blurred"
                    src="../../assets/images/carousel-2.png"
                    width={carouselWidth}
                  />,
                  <StaticImage
                    alt="Fully paid"
                    placeholder="blurred"
                    src="../../assets/images/carousel-3.png"
                    width={carouselWidth}
                  />,
                ]}
              />
            </Box>
          </Stack>
        </BackgroundImageBox>
      </Stack>
    </Block>
  );
};

export default ProcessingBlock;
