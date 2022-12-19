import { css } from "@emotion/react";
import { Theme } from "@mui/system";

export const createGlobalStyle = (theme: Theme) =>
  css(
    css`
      @font-face {
        font-family: "Mont";
        //font-style: normal;
        //font-weight: 500;
        src: url("/fonts/mont_semibold.woff2") format("woff2");
      }

      @font-face {
        font-family: "Code Next";
        //font-style: normal;
        //font-weight: 500;
        src: url("/fonts/code-next_regular.otf") format("opentype");
      }

      html {
        font-family: sans-serif;
      }

      body {
        margin: 0;
        padding: 0;
      }
    `,
    {
      html: {
        fontSize: "100%",
        [theme.breakpoints.down("lg")]: {
          fontSize: "87.5%",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "75%",
        },
      },
    }
  );
