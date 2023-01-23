import * as React from "react";
import { ReactNode } from "react";

import { Stack, Box } from "@mui/system";

import { useBreakpointDown } from "~/utils/use-breakpoints";

export const DemoImageBlock: React.FC<{
  title: ReactNode;
  children: ReactNode;
}> = ({ title, children }) => {
  return (
    <Stack spacing={5.5}>
      <Box sx={{ typography: "h3" }}>{title}</Box>
      {children}
    </Stack>
  );
};

export const DemoImage: React.FC<{
  children: ReactNode;
  topDescriptions?: ReactNode;
  bottomDescriptions?: ReactNode;
  arrows?: ReactNode;
  right?: boolean;
}> = ({ topDescriptions, bottomDescriptions, children, arrows, right }) => {
  const isMobile = useBreakpointDown("sm");

  return (
    <Stack spacing={1.5}>
      {topDescriptions && (
        <Stack spacing={isMobile ? 1 : 3} alignItems="end" direction="row">
          {topDescriptions}
        </Stack>
      )}
      <Box
        position="relative"
        paddingTop={isMobile ? 1.5 : 0}
        paddingBottom={isMobile ? 1.5 : 0}
      >
        <Box
          width={isMobile ? "200%" : "100%"}
          marginLeft={right ? "-100%" : 0}
        >
          {children}
        </Box>
        {arrows && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              width: "200%",
              right: right ? 0 : "",
            }}
          >
            {arrows}
          </Box>
        )}
      </Box>
      {bottomDescriptions && (
        <Stack spacing={isMobile ? 1 : 3} alignItems="top" direction="row">
          {bottomDescriptions}
        </Stack>
      )}
    </Stack>
  );
};
