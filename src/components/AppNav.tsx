import * as React from "react";
import { ComponentProps } from "react";

import { Stack } from "@mui/system";
import { Trans } from "gatsby-plugin-react-i18next";

import MenuIcon from "~/assets/svg/menu-icon.svg";
import { IconButton } from "~/components/IconButton";

import { Link } from "./Link";

export const PAGE_IDS = {
  ourProducts: "our-products",
  processing: "processing",
  antifraud: "antifraud",
  contacts: "contacts",
};

export const AppNav: React.FC<
  ComponentProps<typeof Stack> & { small?: boolean }
> = ({ small, ...props }) => {
  return small ? (
    <IconButton variant="outlined">
      <MenuIcon />
    </IconButton>
  ) : (
    <Stack direction="row" spacing={3.5} {...props}>
      <Link inverted to={`#${PAGE_IDS.ourProducts}`}>
        <Trans>Our products</Trans>
      </Link>
      <Link inverted to={`#${PAGE_IDS.processing}`}>
        <Trans>Processing</Trans>
      </Link>
      <Link inverted to={`#${PAGE_IDS.antifraud}`}>
        <Trans>Antifraud</Trans>
      </Link>
      <Link inverted to={`#${PAGE_IDS.contacts}`}>
        <Trans>Contacts</Trans>
      </Link>
    </Stack>
  );
};
