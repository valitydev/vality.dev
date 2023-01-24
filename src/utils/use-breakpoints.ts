import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/system";
import type { Breakpoints } from "@mui/system/createTheme/createBreakpoints";

export const useBreakpointUp = (...args: Parameters<Breakpoints["up"]>) => {
  const theme = useTheme();
  return useMediaQuery(theme?.breakpoints?.up?.(...args));
};

export const useBreakpointDown = (...args: Parameters<Breakpoints["down"]>) => {
  const theme = useTheme();
  return useMediaQuery(theme?.breakpoints?.down?.(...args));
};
