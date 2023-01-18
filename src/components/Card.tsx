import React, { ReactNode } from "react";

import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";

import { useBreakpointDown } from "~/utils/use-breakpoints";

interface Props {
  title?: ReactNode;
  inverted?: boolean;
  image?: ReactNode;
}

export const StyledCard = styled(Box)<Props>`
  background-color: ${({ theme, inverted }) =>
    inverted ? theme?.palette?.common?.white : theme?.palette?.primary?.[900]};
  border-radius: ${({ theme }) => `${theme?.spacing?.(2.5)}`};

  &.title {
    padding: ${({ theme }) =>
      `${theme?.spacing?.(3)} ${theme?.spacing?.(2.5)}`};
  }

  &.no-title {
    padding: ${({ theme }) =>
      `${theme?.spacing?.(5.375)} ${theme?.spacing?.(2)}`};
  }

  &,
  .text {
    color: ${({ theme, inverted }) =>
      inverted ? theme?.palette?.text?.primary : theme?.palette?.common?.white};
  }

  &:not(.laptop) .image {
    margin-left: auto;
    margin-bottom: ${({ theme }) => theme?.spacing?.(-4)};
    margin-right: ${({ theme }) => theme?.spacing?.(-2.5)};
  }

  .image {
    & > * {
      height: ${({ theme }) => theme?.spacing?.(17)};
    }
  }
`;

export const Card: React.FC<React.ComponentProps<typeof StyledCard>> = ({
  title,
  children,
  image,
  ...props
}) => {
  const isLaptop = useBreakpointDown("md");
  const isMobile = useBreakpointDown("sm");
  return isLaptop && !isMobile ? (
    <StyledCard {...props} className="laptop title">
      <Stack direction="row" spacing={2}>
        <Stack spacing={2}>
          <Box typography="h3" className="text">
            {title}
          </Box>
          <Box className="text">{children}</Box>
        </Stack>
        <Box className="image">{image}</Box>
      </Stack>
    </StyledCard>
  ) : (
    <StyledCard {...props} className={title ? "title" : "no-title"}>
      {title && !isMobile ? (
        <Stack justifyContent="space-between" height="100%">
          <Stack spacing={2}>
            <Box typography="h3" className="text">
              {title}
            </Box>
            <Box className="text">{children}</Box>
          </Stack>
          <Box className="image">{image}</Box>
        </Stack>
      ) : (
        <Stack spacing={5.375}>
          <Box typography="h3" className="text" sx={{ textAlign: "center" }}>
            {title}
          </Box>
          <Box>{image}</Box>
          <Box className="text">{children}</Box>
        </Stack>
      )}
    </StyledCard>
  );
};
