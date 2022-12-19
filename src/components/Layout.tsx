import React from "react";
import { Box } from "@mui/system";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Box sx={{ typography: "body1" }}>{children}</Box>;
};
