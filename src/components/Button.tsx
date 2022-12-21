import { styled } from "@mui/system";
import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/base";
import { css } from "@emotion/react";

export const Button = styled(ButtonUnstyled)(
  ({ theme, color }) => css`
    ${css(theme.typography.button)}

    background-color: ${color ? theme.palette[color]?.A400 : "#fff"};
    color: ${color ? theme.palette[color].contrastText : undefined};

    border-radius: ${theme.spacing(1.5)};
    padding: ${theme.spacing(1.5)} ${theme.spacing(3)};
    transition: all 200ms ease;
    cursor: pointer;
    border: none;

    &:hover {
      box-shadow: ${color === "primary"
        ? "0px 5px 15px rgba(82, 116, 199, 0.7)"
        : undefined};
      color: ${color === "primary" ? undefined : theme.palette.grey?.[800]};
    }

    &.${buttonUnstyledClasses.active} {
      background-color: ${color
        ? theme.palette[color]?.[400]
        : theme.palette.grey?.[100]};
      box-shadow: ${color
        ? undefined
        : `0px 0px 0px 1px ${theme.palette.grey?.[800]}`};
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
