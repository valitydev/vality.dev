import React, { ReactNode, ComponentProps } from "react";

import styled from "@emotion/styled";
import { Box, Container, Stack } from "@mui/system";

import { theme } from "~/theme/theme";

interface Props {
  title?: ReactNode;
  inverted?: boolean;
}

export const StyledBlock = styled(Box)<{ styled: Props }>`
  background-color: ${({ theme, styled: { inverted } }) =>
    inverted ? theme?.palette?.primary?.[900] : theme?.palette?.common?.white};
  padding: ${({ theme }) => theme?.spacing?.(11)} 0 ${theme?.spacing?.(17)};
  overflow: hidden;

  &,
  .text {
    color: ${({ theme, styled: { inverted } }) =>
      inverted ? theme?.palette?.common?.white : theme?.palette?.text?.primary};
  }
`;

export const Block: React.FC<ComponentProps<typeof Box> & Props> = ({
  title,
  inverted,
  children,
  ...props
}) => {
  return (
    <StyledBlock {...props} styled={{ title, inverted }}>
      <Container fixed>
        <Stack spacing={5.5}>
          {title && (
            <Box className="text" typography="h2">
              {title}
            </Box>
          )}
          <Box className="text">{children}</Box>
        </Stack>
      </Container>
    </StyledBlock>
  );
};
