import React from "react";

import { Stack } from "@mui/system";
import { useI18next } from "gatsby-plugin-react-i18next";

import WorldIcon from "~/assets/svg/world-icon.svg";
import { IconButton } from "~/components/IconButton";

import { Link } from "./Link";

export const LanguageSelector: React.FC<{ small?: boolean }> = ({ small }) => {
  const { languages, language } = useI18next();

  return small ? (
    <IconButton variant="outlined">
      <WorldIcon />
    </IconButton>
  ) : (
    <Stack spacing={1.5} direction="row">
      {languages.map((lang) => (
        <Link
          inverted
          to="/"
          language={lang}
          active={lang === language}
          key={lang}
        >
          {lang?.toUpperCase()}
        </Link>
      ))}
    </Stack>
  );
};
