import React, { ReactNode } from "react";

import styled from "@emotion/styled";
import { Box, Container, Stack } from "@mui/system";

interface Props {
  title?: ReactNode;
  inverted?: boolean;
}

export const StyledBlock = styled(Box)<Props>`
  background-color: ${({ theme, inverted }) =>
    inverted ? theme?.palette?.primary?.[900] : theme?.palette?.common?.white};
  padding: ${({ theme }) =>
    `${theme?.spacing?.(11)} 0 ${theme?.spacing?.(17)}`};
  overflow: hidden;

  &,
  .text {
    color: ${({ theme, inverted }) =>
      inverted ? theme?.palette?.common?.white : theme?.palette?.text?.primary};
  }
`;

export const Block: React.FC<React.ComponentProps<typeof StyledBlock>> = ({
  title,
  children,
  ...props
}) => {
  return (
    <StyledBlock {...props}>
      <Container fixed>
        <Stack spacing={5.5}>
          {title && (
            <Box className="text" sx={{ typography: "h2" }}>
              {title}
            </Box>
          )}
          <Box className="text">{children}</Box>
        </Stack>
      </Container>
    </StyledBlock>
  );
};
