import React from "react";

import { Stack } from "@mui/system";
import { useI18next } from "gatsby-plugin-react-i18next";

import WorldIcon from "~/assets/svg/world-icon.svg";
import { IconButton } from "~/components/IconButton";
import { Menu, MenuItem } from "~/components/Menu";

import { Link } from "./Link";

export const LanguageSelector: React.FC<{
  small?: boolean;
  direction?: "top";
}> = ({ small, direction }) => {
  const { languages, language, changeLanguage } = useI18next();

  return small ? (
    <Menu
      direction={direction}
      button={
        <IconButton variant="outlined">
          <WorldIcon />
        </IconButton>
      }
    >
      {languages.map((lang) => (
        <MenuItem key={lang} onClick={() => changeLanguage(lang)}>
          {lang?.toUpperCase()}
        </MenuItem>
      ))}
    </Menu>
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
