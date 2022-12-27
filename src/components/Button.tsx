import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/base";
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Stack, Box } from "@mui/system";

interface Props {
  endIcon?: ReactNode;
  href?: string;
}

const StyledButton = styled(ButtonUnstyled)(
  ({ theme, color }) => css`
    ${css(theme.typography.button)}

    background-color: ${color ? theme.palette[color]?.A400 : "#fff"};
    color: ${color ? theme.palette[color].contrastText : undefined};
    white-space: nowrap;

    border-radius: ${theme.spacing(1.5)};
    padding: ${theme.spacing(1.5)} ${theme.spacing(3)};
    transition: all 200ms ease;
    cursor: pointer;
    border: none;

    * {
      fill: ${color === "primary" ? undefined : theme.palette.grey?.[800]};
      transition: fill 200ms ease;
    }

    & svg {
      height: ${theme.spacing(3)};
      width: auto;
    }

    &:hover {
      box-shadow: ${color === "primary"
        ? "0px 5px 15px rgba(82, 116, 199, 0.7)"
        : undefined};
      color: ${color === "primary" ? undefined : theme.palette.grey?.[800]};

      * {
        fill: ${color
          ? theme.palette[color].contrastText
          : theme.palette.text.primary};
      }
    }

    &.${buttonUnstyledClasses.active} {
      background-color: ${color
        ? theme.palette[color]?.[400]
        : theme.palette.grey?.[100]};
      box-shadow: ${color
        ? undefined
        : `0px 0px 0px 1px ${theme.palette.grey?.[800]}`};

      * {
        fill: ${color === "primary" ? undefined : theme.palette.grey?.[800]};
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
> = ({ endIcon, children, href, ...props }) => {
  const clickHandler = href
    ? () => {
        window.open(href, "_blank");
      }
    : undefined;

  return (
    <StyledButton {...props} onClick={clickHandler}>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
        <Box>{children}</Box>
        {endIcon}
      </Stack>
    </StyledButton>
  );
};
