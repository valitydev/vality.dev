import * as React from "react";

import { Stack } from "@mui/system";
import { Trans } from "gatsby-plugin-react-i18next";

import { Link } from "./Link";

export const PAGE_IDS = {
  ourProducts: "our-products",
  processing: "processing",
  antifraud: "antifraud",
  contacts: "contacts",
};

export const AppNav: React.FC = () => {
  return (
    <Stack direction="row" spacing={3.5}>
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
