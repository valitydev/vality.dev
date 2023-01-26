import React, { useEffect, useState } from "react";

import { Box } from "@mui/system";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSsr, setIsSsr] = useState(true);
  useEffect(() => {
    setIsSsr(typeof window === "undefined");
  }, []);

  return (
    <Box
      sx={{
        typography: "body1",
        opacity: isSsr ? 0 : 1,
        transition: "opacity 0.15s ease",
      }}
    >
      {children}
    </Box>
  );
};
