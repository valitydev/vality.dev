import React, { ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/base";
import { Stack, Box } from "@mui/system";

interface Props {
  endIcon?: ReactNode;
  href?: string;
}

const StyledButton = styled(ButtonUnstyled)(
  ({ theme, color }) => css`
    ${css(theme?.typography?.button)}

    background-color: ${color ? theme?.palette?.[color]?.A400 : "#fff"};
    color: ${color ? theme?.palette?.[color]?.contrastText : undefined};
    white-space: nowrap;

    border-radius: ${theme?.spacing?.(1.5)};
    padding: ${theme?.spacing?.(1.5)} ${theme?.spacing?.(3)};
    cursor: pointer;
    border: none;

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
      box-shadow: ${color === "primary"
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
> = ({ endIcon, children, href, onClick, ...props }) => {
  const clickHandler = href
    ? () => {
        window.open(href, "_blank");
      }
    : onClick;

  return (
    <StyledButton {...props} onClick={clickHandler}>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
        {children && <Box>{children}</Box>}
        {endIcon}
      </Stack>
    </StyledButton>
  );
};
