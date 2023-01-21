import React, { ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/base";
import { Stack, Box } from "@mui/system";
import { useI18next } from "gatsby-plugin-react-i18next";

type SvgColoredParam = "fill";

interface Props extends React.ComponentProps<typeof ButtonUnstyled> {
  endIcon?: ReactNode;
  href?: string;
  variant?: "text" | "contained" | "outlined";
  target?: "_self" | "_blank";
  size?: "small" | "medium" | "large";
  svgColoredParams?: SvgColoredParam[];
}

function getColoredSvgCss(params: SvgColoredParam[] = [], color: string) {
  return css(Object.fromEntries(params?.map?.((p) => [p, color]) || []));
}

const ButtonWrapper = styled(ButtonUnstyled)<Props & { hasText: boolean }>(
  ({ theme, color, variant, size, svgColoredParams, hasText }) => {
    const buttonSizes = {
      large: 6,
      medium: 4,
      small: 4,
    };
    const iconSizes = {
      large: 3,
      medium: 2,
      small: 2,
    };
    const buttonSize = theme?.spacing?.(buttonSizes[size ?? "medium"]);
    const iconSize =
      variant === "text"
        ? buttonSize
        : theme?.spacing?.(iconSizes[size ?? "medium"]);
    return css`
      ${css(theme?.typography?.button)}

      background-color: ${variant === "text"
        ? "transparent"
        : color
        ? theme?.palette?.[color]?.[variant === "contained" ? "A400" : 900]
        : "#fff"};
      color: ${color ? theme?.palette?.[color]?.contrastText : undefined};
      white-space: nowrap;

      border-radius: ${theme?.spacing?.(size === "large" ? 1.5 : 1)};
      height: ${buttonSize};
      line-height: ${buttonSize};
      min-width: ${buttonSize};
      padding: 0 ${hasText ? theme?.spacing?.(3) : 0};

      border: ${variant === "outlined"
        ? `1px solid ${theme?.palette?.primary?.[700]}`
        : "none"};

      cursor: pointer;

      &,
      * {
        transition: all 200ms ease;
      }

      * {
        ${getColoredSvgCss(
          svgColoredParams,
          variant === "text"
            ? theme?.palette?.common?.white
            : color === "primary"
            ? theme?.palette?.text?.primary
            : theme?.palette?.grey?.[800]
        )}
      }

      svg {
        height: ${iconSize};
        width: ${iconSize};
      }

      &:hover {
        box-shadow: ${color === "primary" && variant === "contained"
          ? "0px 5px 15px rgba(82, 116, 199, 0.7)"
          : undefined};
        color: ${color === "primary" ? undefined : theme?.palette?.grey?.[800]};

        * {
          ${getColoredSvgCss(
            svgColoredParams,
            variant === "text"
              ? theme?.palette?.common?.white
              : color
              ? ""
              : theme?.palette?.text?.primary
          )}
        }
      }

      &.${buttonUnstyledClasses.active} {
        background-color: ${variant === "text"
          ? ""
          : color
          ? theme?.palette?.[color]?.[400]
          : theme?.palette?.grey?.[100]};
        box-shadow: ${color || variant === "text"
          ? undefined
          : `0px 0px 0px 1px ${theme?.palette?.grey?.[800]}`};

        * {
          ${getColoredSvgCss(
            svgColoredParams,
            variant === "text"
              ? theme?.palette?.common?.white
              : color === "primary"
              ? theme?.palette?.text?.primary
              : theme?.palette?.grey?.[800]
          )}
        }
      }

      &.${buttonUnstyledClasses.focusVisible} {
        outline: none;
      }

      &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;
  }
);

export const Button: React.FC<Props> = ({
  endIcon,
  children,
  href,
  onClick,
  variant,
  target,
  size,
  svgColoredParams,
  ...props
}) => {
  const { navigate } = useI18next();
  const clickHandler = href
    ? async () => {
        if (target === "_blank") window.open(href, "_blank");
        else await navigate(href);
      }
    : onClick;

  return (
    <ButtonWrapper
      {...props}
      variant={variant || "text"}
      size={size || "medium"}
      onClick={clickHandler}
      svgColoredParams={svgColoredParams || ["fill"]}
      hasText={!!children}
    >
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        {children && <Box display="flex">{children}</Box>}
        {endIcon}
      </Stack>
    </ButtonWrapper>
  );
};
