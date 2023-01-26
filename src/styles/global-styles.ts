import { css } from "@emotion/react";
import { Theme } from "@mui/system";

export const createGlobalStyle = (theme: Theme) =>
  css`
    html {
      ${theme?.breakpoints?.up?.("md")} {
        ${(theme?.typography as any)?.h1} {
          font-size: 115%;
        }
      }

      ${theme?.breakpoints?.down?.("lg")} {
        font-size: 87.5%;
      }

      ${theme?.breakpoints?.down?.("md")} {
        font-size: 80%;
      }

      ${theme?.breakpoints?.down?.("sm")} {
        font-size: 75%;
      }
    }
  `;
