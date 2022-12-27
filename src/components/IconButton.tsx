import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/base";
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  href?: string;
  inverted?: boolean;
}

const StyledButton = styled(ButtonUnstyled)<Props>(
  ({ theme, inverted }) => css`
    ${css(theme?.typography?.button)}
    padding: 0;
    margin: 0;
    background: transparent;
    cursor: pointer;
    border: none;

    * {
      transition: fill 200ms ease;
      fill: ${inverted
        ? theme?.palette?.common?.white
        : theme?.palette?.text?.primary};
    }

    svg {
      height: ${theme?.spacing?.(5.5)};
      width: auto;
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

export const IconButton: React.FC<
  React.ComponentProps<typeof StyledButton> & Props
> = ({ children, href, ...props }) => {
  const clickHandler = href
    ? () => {
        window.open(href, "_blank");
      }
    : undefined;

  return (
    <StyledButton {...props} onClick={clickHandler}>
      {children}
    </StyledButton>
  );
};
