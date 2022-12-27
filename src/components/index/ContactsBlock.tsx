import * as React from "react";
import { Block } from "../Block";
import { Stack, Box } from "@mui/system";
import { Trans } from "gatsby-plugin-react-i18next";
import ContactsImg from "../../assets/svg/contacts.svg";
import { Button } from "../Button";
import Email from "../../assets/svg/email.svg";
import Telegram from "../../assets/svg/telegram.svg";
import Linkedin from "../../assets/svg/linkedin.svg";
import Github from "../../assets/svg/github.svg";
import Logo from "../../assets/svg/logo.svg";
import { LanguageSelector } from "../LanguageSelector";
import { AppNav } from "../AppNav";
import contactsBgSrc from "../../images/contacts-bg.svg";
import { BackgroundImageBox } from "../BackgroundImageBox";
import { IconButton } from "../IconButton";
import config from "../../../config.json";

export const ContactsBlock: React.FC<React.ComponentProps<typeof Block>> = (
  props
) => (
  <Block {...props} inverted sx={{ paddingBottom: "0 !important" }}>
    <BackgroundImageBox src={contactsBgSrc} right={-1100} bottom={-700}>
      <Stack spacing={25}>
        <Stack direction="row">
          <Stack flex={1} spacing={5.5}>
            <Box sx={{ typography: "h3", color: "#fff" }}>
              <Trans>Contacts</Trans>
            </Box>
            <Stack spacing={4.5} direction="row">
              {config.contacts.email && (
                <Stack spacing={2}>
                  <Box>
                    <Trans>Email</Trans>
                  </Box>
                  <Button
                    endIcon={<Email />}
                    href={`mailto:${config.contacts.email}`}
                  >
                    {config.contacts.email}
                  </Button>
                </Stack>
              )}
              {config.contacts.telegram && (
                <Stack spacing={2}>
                  <Box>
                    <Trans>Telegram</Trans>
                  </Box>
                  <Button
                    endIcon={<Telegram />}
                    href={config.contacts.telegram}
                  >
                    Vality
                  </Button>
                </Stack>
              )}
            </Stack>
            <Stack spacing={2}>
              <Box>
                <Trans>Social media</Trans>
              </Box>
              <Stack spacing={4} direction="row">
                <IconButton inverted href={config.contacts.linkedin}>
                  <Linkedin />
                </IconButton>
                <IconButton inverted href={config.contacts.github}>
                  <Github />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
          <Box flex={1}>
            <ContactsImg />
          </Box>
        </Stack>
        <Stack spacing={5.5} sx={{ paddingBottom: 4.5 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Logo style={{ width: "auto" }} height={32} />
            <LanguageSelector />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              &copy; <Trans>All rights reserved</Trans>
            </Box>
            <AppNav />
          </Stack>
        </Stack>
      </Stack>
    </BackgroundImageBox>
  </Block>
);
