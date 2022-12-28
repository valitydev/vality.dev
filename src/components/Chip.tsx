import React, { ComponentProps, ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";

interface Props {
  startIcon?: ReactNode;
}

const Wrapper = styled(Stack)<Props>`
  ${({ theme }) => css(theme?.typography?.body1)};

  background-color: ${({ theme }) => theme?.palette?.common?.white};
  border-radius: ${({ theme }) => theme?.spacing?.(10)};
  padding: ${({ theme }) => `0 ${theme?.spacing?.(4.5)}`};
  height: ${({ theme }) => theme?.spacing?.(5.5)};

  & > * {
    align-items: center;
    display: flex;
  }

  .icon svg {
    height: ${({ theme }) => theme?.spacing?.(2.75)};
  }
`;

export const Chip: React.FC<ComponentProps<typeof Wrapper>> = ({
  children,
  startIcon,
  ...props
}) => {
  return (
    <Wrapper {...props} direction="row" spacing={1}>
      {startIcon && <Box className="icon">{startIcon}</Box>}
      {children && <Box>{children}</Box>}
    </Wrapper>
  );
};
