import React, { ReactNode, ComponentProps } from "react";

import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";

import { useBreakpointDown } from "~/utils/use-breakpoints";

interface Props {
  title?: ReactNode;
  inverted?: boolean;
  image?: ReactNode;
}

const StyledCard = styled(Box)<{ styled: Props }>`
  background-color: ${({ theme, styled: { inverted } }) =>
    inverted ? theme?.palette?.common?.white : theme?.palette?.primary?.[900]};
  border-radius: ${({ theme }) => theme?.spacing?.(2.5)};
  ${({ theme }) => theme?.breakpoints?.down("sm")} {
    border-radius: ${({ theme }) => theme?.spacing?.(2)};
  }
  padding: ${({ theme }) => `${theme?.spacing?.(3)} ${theme?.spacing?.(2.5)}`};

  && * {
    color: ${({ theme, styled: { inverted } }) =>
      inverted ? theme?.palette?.text?.primary : theme?.palette?.common?.white};
  }
`;

const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;

  & > * {
    width: ${({ theme }) => theme?.spacing?.(26.5)};
  }
`;

const BottomRightImageWrapper = styled(ImageWrapper)`
  display: block;
  margin-left: auto;
  margin-bottom: ${({ theme }) => theme?.spacing?.(-4)};
  margin-right: ${({ theme }) => theme?.spacing?.(-2.5)};
`;

export const Card: React.FC<ComponentProps<typeof Box> & Props> = ({
  title,
  children,
  image,
  inverted,
  ...props
}) => {
  const isXl = useBreakpointDown("xl");
  const isLaptop = useBreakpointDown("md");
  const isMobile = useBreakpointDown("sm");
  const isHorizontal = (isLaptop && !isMobile) || (isXl && !title && !isLaptop);
  const isVertical = !isHorizontal && (isMobile || !title);
  const isVerticalTextTop = !isHorizontal && !isVertical;

  return (
    <StyledCard {...props} styled={{ title, inverted, image }}>
      {isVertical && (
        <Stack spacing={2.5}>
          {!!title && (
            <Box typography="h3" className="text" sx={{ textAlign: "center" }}>
              {title}
            </Box>
          )}
          <ImageWrapper>{image}</ImageWrapper>
          <Box className="text">{children}</Box>
        </Stack>
      )}
      {isVerticalTextTop && (
        <Stack justifyContent="space-between" height="100%">
          <Stack spacing={2}>
            <Box typography="h3" className="text">
              {title}
            </Box>
            <Box className="text">{children}</Box>
          </Stack>
          <BottomRightImageWrapper>{image}</BottomRightImageWrapper>
        </Stack>
      )}
      {isHorizontal && (
        <Stack direction="row" spacing={2}>
          <Stack spacing={2}>
            <Box typography="h3" className="text">
              {title}
            </Box>
            <Box className="text">{children}</Box>
          </Stack>
          <BottomRightImageWrapper>{image}</BottomRightImageWrapper>
        </Stack>
      )}
    </StyledCard>
  );
};
