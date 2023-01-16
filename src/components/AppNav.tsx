import * as React from "react";
import { ComponentProps } from "react";

import { Stack } from "@mui/system";
import { Trans } from "gatsby-plugin-react-i18next";

import MenuIcon from "~/assets/svg/menu-icon.svg";
import { IconButton } from "~/components/IconButton";
import { Menu, MenuItem } from "~/components/Menu";

import { Link } from "./Link";

export const PAGE_IDS = {
  ourProducts: "our-products",
  processing: "processing",
  antifraud: "antifraud",
  contacts: "contacts",
};

const LINKS = [
  { title: <Trans>Our products</Trans>, id: PAGE_IDS.ourProducts },
  { title: <Trans>Processing</Trans>, id: PAGE_IDS.processing },
  { title: <Trans>Antifraud</Trans>, id: PAGE_IDS.antifraud },
  { title: <Trans>Contacts</Trans>, id: PAGE_IDS.contacts },
];

export const AppNav: React.FC<
  Omit<ComponentProps<typeof Stack>, "direction"> & {
    small?: boolean;
    direction?: "top";
  }
> = ({ small, direction, ...props }) => {
  return small ? (
    <Menu
      direction={direction}
      button={
        <IconButton variant="outlined">
          <MenuIcon />
        </IconButton>
      }
    >
      {LINKS.map((link) => (
        <MenuItem key={link.id} href={`#${link.id}`} target="_self">
          {link.title}
        </MenuItem>
      ))}
    </Menu>
  ) : (
    <Stack direction="row" spacing={3.5} {...props}>
      {LINKS.map((link) => (
        <Link key={link.id} inverted to={`#${link.id}`}>
          {link.title}
        </Link>
      ))}
    </Stack>
  );
};
