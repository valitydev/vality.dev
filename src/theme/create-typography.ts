import * as React from "react";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline";

export interface FontStyle
  extends Required<{
    fontFamily: React.CSSProperties["fontFamily"];
    fontSize: number;
    fontWeightLight: React.CSSProperties["fontWeight"];
    fontWeightRegular: React.CSSProperties["fontWeight"];
    fontWeightMedium: React.CSSProperties["fontWeight"];
    fontWeightBold: React.CSSProperties["fontWeight"];
    htmlFontSize: number;
  }> {}

function pxToRem(size: number, htmlFontSize: number) {
  return `${size / htmlFontSize}rem`;
}

export function createTypography(
  htmlFontSize: number
): FontStyle & Record<Variant, React.CSSProperties> {
  const localPxToRem = (size: number) => pxToRem(size, htmlFontSize);

  const headersFontFamily = "'Mont', sans-serif";
  const fontFamily = "'Code Next', sans-serif";

  const createPart = (size: number, lineSize: number, fontWeight: number) => ({
    fontSize: localPxToRem(size),
    lineHeight: lineSize / size,
    fontWeight,
    fontFamily: fontWeight >= 500 ? headersFontFamily : fontFamily,
    color: "#181818",
  });

  const typography = {
    fontFamily,
    htmlFontSize: htmlFontSize,
    fontSize: htmlFontSize,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  };

  return {
    ...typography,
    h1: createPart(48, 56, typography.fontWeightMedium),
    h2: createPart(32, 40, typography.fontWeightMedium),
    h3: createPart(28, 36, typography.fontWeightMedium),
    h4: createPart(20, 36, typography.fontWeightMedium),
    h5: createPart(16, 24, typography.fontWeightMedium),
    h6: createPart(16, 28, typography.fontWeightMedium),
    subtitle1: createPart(16, 28, typography.fontWeightMedium),
    subtitle2: createPart(16, 28, typography.fontWeightMedium),
    body1: createPart(16, 28, typography.fontWeightRegular),
    body2: createPart(16, 28, typography.fontWeightRegular),
    button: createPart(16, 24, typography.fontWeightMedium),
    caption: createPart(16, 20, typography.fontWeightRegular),
    overline: createPart(16, 20, typography.fontWeightRegular),
  };
}
