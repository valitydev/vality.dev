import * as React from "react";
import { useState, useEffect } from "react";

import { Stack, Box } from "@mui/system";
import { Trans } from "gatsby-plugin-react-i18next";

import contactsBgSrc from "~/assets/images/contacts-bg.svg";
import ContactsImg from "~/assets/svg/contacts.svg";
import Email from "~/assets/svg/email.svg";
import Github from "~/assets/svg/github.svg";
import Linkedin from "~/assets/svg/linkedin.svg";
import Logo from "~/assets/svg/logo.svg";
import Telegram from "~/assets/svg/telegram.svg";

import config from "../../../config.json";
import { AppNav } from "../AppNav";
import { BackgroundImageBox } from "../BackgroundImageBox";
import { Block } from "../Block";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { LanguageSelector } from "../LanguageSelector";

export const ContactsBlock: React.FC<React.ComponentProps<typeof Block>> = (
  props
) => {
  const [realtimeConfig, setRealtimeConfig] = useState({
    contacts: {},
  } as typeof config);

  useEffect(() => {
    /* Load contacts only in real time to hide from scrappers (which don't know how to use JS) */
    setRealtimeConfig(config);
  }, []);

  return (
    <Block {...props} inverted sx={{ paddingBottom: "0 !important" }}>
      <BackgroundImageBox src={contactsBgSrc} right={-1100} bottom={-700}>
        <Stack spacing={25}>
          <Stack direction="row">
            <Stack flex={1} spacing={5.5}>
              <Box sx={{ typography: "h3", color: "#fff" }}>
                <Trans>Contacts</Trans>
              </Box>
              <Stack spacing={4.5} direction="row">
                {realtimeConfig.contacts.email && (
                  <Stack spacing={2}>
                    <Box>
                      <Trans>Email</Trans>
                    </Box>
                    <Button
                      endIcon={<Email />}
                      href={`mailto:${realtimeConfig.contacts.email}`}
                    >
                      {realtimeConfig.contacts.email}
                    </Button>
                  </Stack>
                )}
                {realtimeConfig.contacts.telegram && (
                  <Stack spacing={2}>
                    <Box>
                      <Trans>Telegram</Trans>
                    </Box>
                    <Button
                      endIcon={<Telegram />}
                      href={realtimeConfig.contacts.telegram}
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
                  <IconButton inverted href={realtimeConfig.contacts.linkedin}>
                    <Linkedin />
                  </IconButton>
                  <IconButton inverted href={realtimeConfig.contacts.github}>
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
};
