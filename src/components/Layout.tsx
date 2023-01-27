import React from "react";

import { Box } from "@mui/system";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Box typography="body1">{children}</Box>;
};
