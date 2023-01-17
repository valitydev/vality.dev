import React, { ReactNode, useRef, ComponentProps } from "react";

import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import { useToggle, useOnClickOutside } from "usehooks-ts";

import TriangleIcon from "~/assets/svg/triangle-icon.svg";
import { Button } from "~/components/Button";

export const MenuItem: React.FC<ComponentProps<typeof Button>> = ({
  children,
  ...props
}) => {
  return (
    <Box>
      <Button color="primary" variant="outlined" {...props}>
        {children}
      </Button>
    </Box>
  );
};

const Triangle = styled(TriangleIcon)<{ direction?: "top" }>`
  position: absolute;
  width: 10px;
  height: ${({ theme }) => theme?.spacing?.(0.5)};
  top: ${({ direction }) => (direction === "top" ? "-" : "")}${({ theme }) => theme?.spacing?.(0.5)};
  right: ${({ theme }) => theme?.spacing?.(3)};
  transform: translateX(50%);
`;

export const Menu: React.FC<{
  children: ReactNode;
  button: ReactNode;
  direction?: "top";
}> = ({ children, button, direction }) => {
  const ref = useRef(null);
  const [open, toggleOpen, setOpen] = useToggle();
  useOnClickOutside(ref, () => {
    setOpen(false);
  });
  const menu = open && (
    <Box sx={{ position: "relative" }}>
      <Triangle direction={direction} />
      <Stack
        spacing={1}
        alignItems="end"
        sx={{
          position: "absolute",
          right: 0,
          [direction === "top" ? "bottom" : "top"]: 8,
        }}
      >
        {children}
      </Stack>
    </Box>
  );

  return (
    <Box ref={ref} sx={{ position: "relative" }}>
      {direction === "top" && menu}
      <Box
        onClick={() => {
          toggleOpen();
        }}
      >
        {button}
      </Box>
      {direction !== "top" && menu}
    </Box>
  );
};
