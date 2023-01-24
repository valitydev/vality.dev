import { css } from "@emotion/react";
import { Theme } from "@mui/system";

export const createGlobalStyle = (theme: Theme) =>
  css`
    @font-face {
      font-family: "Mont";
      //font-style: normal;
      //font-weight: 500;
      src: url("https://valitydev-statics.s3.eu-central-1.amazonaws.com/Mont/mont_semibold.woff2")
        format("woff2");
    }

    @font-face {
      font-family: "Code Next";
      //font-style: normal;
      //font-weight: 500;
      src: url("https://valitydev-statics.s3.eu-central-1.amazonaws.com/Code-Next/code-next_regular.woff2")
        format("woff2");
    }

    html {
      font-family: sans-serif;
    }

    html {
      font-size: 100%;

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

    body {
      margin: 0;
      padding: 0;
      shape-rendering: geometricprecision;
    }
  `;
