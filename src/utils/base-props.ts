import { ReactNode } from "react";

import { PaletteProps, SpacingProps, SxProps } from "@mui/system";

export interface BaseProps extends PaletteProps, SpacingProps {
  children?: ReactNode;
  className?: string;
  id?: string;
  sx?: SxProps;
}
