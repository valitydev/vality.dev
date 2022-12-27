import React from "react";

import { Stack } from "@mui/system";
import { useI18next } from "gatsby-plugin-react-i18next";

import { Link } from "./Link";

export const LanguageSelector: React.FC = () => {
  const { languages, language } = useI18next();

  return (
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
