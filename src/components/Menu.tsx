import React, { ReactNode, useRef } from "react";

import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import { useToggle, useOnClickOutside } from "usehooks-ts";

import TriangleIcon from "~/assets/svg/triangle-icon.svg";
import { Button } from "~/components/Button";

export const MenuItem: React.FC<{ children: ReactNode; to?: string }> = ({
  children,
}) => {
  return (
    <Box>
      <Button>{children}</Button>
    </Box>
  );
};

const Triangle = styled(TriangleIcon)`
  position: absolute;
  width: 10px;
  height: 4px;
  top: 4px;
  right: 25px;
`;

export const Menu: React.FC<{
  children: ReactNode;
  button: ReactNode;
}> = ({ children, button }) => {
  const ref = useRef(null);
  const [open, toggleOpen, setOpen] = useToggle();
  useOnClickOutside(ref, () => {
    setOpen(false);
  });

  return (
    <Box ref={ref} sx={{ position: "relative" }}>
      <Box
        onClick={() => {
          toggleOpen();
        }}
      >
        {button}
      </Box>
      <Box sx={{ position: "relative" }}>
        {open ? (
          <>
            <Triangle />
            <Stack
              spacing={1}
              alignItems="end"
              sx={{ position: "absolute", right: 0, top: 8 }}
            >
              {children}
            </Stack>
          </>
        ) : null}
      </Box>
    </Box>
  );
};
