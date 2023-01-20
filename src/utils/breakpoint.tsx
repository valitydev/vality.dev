import React, { ReactNode } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, Breakpoint as MuiBreakpoint } from "@mui/system";

export const Breakpoint: React.FC<{
  up?: MuiBreakpoint | number;
  down?: MuiBreakpoint | number;
  only?: MuiBreakpoint;
  children: ReactNode;
}> = ({ up, down, only, children }) => {
  const theme = useTheme();
  let queryInput: string = "";
  if (only) queryInput = theme.breakpoints.only(only);
  else if (up) {
    if (down) queryInput = theme.breakpoints.between(up, down);
    else queryInput = theme.breakpoints.up(up);
  } else if (down) queryInput = theme.breakpoints.down(down);
  const isBreakpoint = useMediaQuery(queryInput);
  return isBreakpoint ? children : (null as any);
};
