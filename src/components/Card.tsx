import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import React, { ReactNode } from "react";

interface Props {
  title?: ReactNode;
  inverted?: boolean;
  image?: ReactNode;
}

export const StyledCard = styled(Box)<Props>`
  background-color: ${({ theme, inverted }) =>
    inverted ? theme.palette.common.white : theme.palette.primary[900]};
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(2.5)}`};
  border-radius: ${({ theme }) => `${theme.spacing(2.5)}`};

  &,
  .text {
    color: ${({ theme, inverted }) =>
      inverted ? theme.palette.text.primary : theme.palette.common.white};
  }

  .image {
    margin-left: auto;
    margin-bottom: ${({ theme }) => `-${theme.spacing(3)}`};
    margin-right: ${({ theme }) => `-${theme.spacing(2.5)}`};
    & > * {
      height: 138px;
    }
  }
`;

export const Card: React.FC<React.ComponentProps<typeof StyledCard>> = ({
  title,
  children,
  image,
  ...props
}) => {
  return (
    <StyledCard {...props}>
      <Stack justifyContent="space-between" height="100%">
        <Stack>
          <Box typography="h3" className="text">
            {title}
          </Box>
          <Box className="text">{children}</Box>
        </Stack>
        <Box className="image">{image}</Box>
      </Stack>
    </StyledCard>
  );
};
