import React, { ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/base";
import { Stack, Box } from "@mui/system";

interface Props {
  endIcon?: ReactNode;
  href?: string;
  variant?: "text" | "contained" | "outlined";
  target?: "_self" | "_blank";
}

const StyledButton = styled(ButtonUnstyled)<Props>(
  ({ theme, color, variant }) => css`
    ${css(theme?.typography?.button)}

    background-color: ${color
      ? theme?.palette?.[color]?.[variant === "contained" ? "A400" : 900]
      : "#fff"};
    color: ${color ? theme?.palette?.[color]?.contrastText : undefined};
    white-space: nowrap;

    border-radius: ${theme?.spacing?.(1.5)};
    padding: ${theme?.spacing?.(1.5)} ${theme?.spacing?.(3)};
    cursor: pointer;

    border: ${variant === "outlined"
      ? `1px solid ${theme?.palette?.primary?.[700]}`
      : "none"};

    &,
    * {
      transition: all 200ms ease;
    }

    * {
      fill: ${color === "primary" ? undefined : theme?.palette?.grey?.[800]};
    }

    & svg {
      height: ${theme?.spacing?.(3)};
      width: auto;
    }

    &:hover {
      box-shadow: ${color === "primary" && variant === "contained"
        ? "0px 5px 15px rgba(82, 116, 199, 0.7)"
        : undefined};
      color: ${color === "primary" ? undefined : theme?.palette?.grey?.[800]};

      * {
        fill: ${color
          ? theme?.palette?.[color]?.contrastText
          : theme?.palette?.text?.primary};
      }
    }

    &.${buttonUnstyledClasses.active} {
      background-color: ${color
        ? theme?.palette?.[color]?.[400]
        : theme?.palette?.grey?.[100]};
      box-shadow: ${color
        ? undefined
        : `0px 0px 0px 1px ${theme?.palette?.grey?.[800]}`};

      * {
        fill: ${color === "primary" ? undefined : theme?.palette?.grey?.[800]};
      }
    }

    &.${buttonUnstyledClasses.focusVisible} {
      outline: none;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `
);

export const Button: React.FC<
  React.ComponentProps<typeof StyledButton> & Props
> = ({ endIcon, children, href, onClick, variant, target, ...props }) => {
  const clickHandler = href
    ? () => {
        window.open(href, target ?? "_blank");
      }
    : onClick;

  return (
    <StyledButton {...props} variant={variant || "text"} onClick={clickHandler}>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
        {children && <Box>{children}</Box>}
        {endIcon}
      </Stack>
    </StyledButton>
  );
};
