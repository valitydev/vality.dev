import * as React from "react";
import { Block } from "../Block";
import { Stack, Box } from "@mui/system";
import { Trans } from "gatsby-plugin-react-i18next";
import ContactsImg from "../../assets/svg/contacts.svg";

export const ContactsBlock: React.FC<
  React.ComponentProps<typeof Block>
> = () => (
  <Block inverted>
    <Stack direction="row">
      <Stack flex={1} spacing={5.5}>
        <Box sx={{ typography: "h3", color: "#fff" }}>
          <Trans>Contacts</Trans>
        </Box>
        <Stack spacing={4.5}>
          <Box>
            <Trans>Email</Trans>
            <Trans>Telegram</Trans>
          </Box>
          <Box>
            <Trans>Social media</Trans>
          </Box>
        </Stack>
      </Stack>
      <Box flex={1}>
        <ContactsImg />
      </Box>
    </Stack>
  </Block>
);
