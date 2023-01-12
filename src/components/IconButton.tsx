import React from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/base";
import { Box } from "@mui/system";

interface Props {
  href?: string;
  inverted?: boolean;
  variant?: "text" | "contained" | "outlined";
  size?: "medium" | "large";
  svgColoredParams?: "fill"[];
}

const StyledButton = styled(ButtonUnstyled)<Props>(
  ({ theme, inverted, variant, size, svgColoredParams }) => css`
    ${css(theme?.typography?.button)}
    border-radius: ${theme?.spacing?.(1.5)};
    padding: ${variant === "text" ? 0 : theme?.spacing?.(2)};
    margin: 0;
    cursor: pointer;
    border: ${variant === "outlined"
      ? `1px solid ${theme?.palette?.primary?.[700]}`
      : "none"};
    background-color: ${variant === "contained" ? "#fff" : "transparent"};

    * {
      transition: fill 200ms ease;
      ${css(
        Object.fromEntries(
          svgColoredParams?.map?.((p) => [
            p,
            inverted
              ? theme?.palette?.common?.white
              : theme?.palette?.text?.primary,
          ]) || []
        )
      )}
    }

    svg {
      height: ${theme?.spacing?.(size === "medium" ? 3 : 5.5)};
      width: ${theme?.spacing?.(size === "medium" ? 3 : 5.5)};
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
> = ({
  children,
  href,
  onClick,
  variant,
  size,
  svgColoredParams,
  ...props
}) => {
  const clickHandler = href
    ? () => {
        window.open(href, "_blank");
      }
    : onClick;

  return (
    <StyledButton
      {...props}
      variant={variant || "text"}
      size={size || "medium"}
      svgColoredParams={svgColoredParams || ["fill"]}
      onClick={clickHandler}
    >
      <Box display="flex">{children}</Box>
    </StyledButton>
  );
};
