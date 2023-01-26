import React, { ReactNode, useState } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import { useElementSize } from "usehooks-ts";

import ArrowLeft from "~/assets/svg/arrow-left.svg";
import ArrowRight from "~/assets/svg/arrow-right.svg";
import Repeat from "~/assets/svg/repeat.svg";
import { Button } from "~/components/Button";

interface Props {
  images: ReactNode[];
  width: number;
}

const ITEM_SIZE_K = [1, 0.75, 0.52];

const Item = styled(Box)<{
  styled: { num: number; fullWidth: number } & Pick<Props, "width">;
}>(({ theme, styled: { num, width, fullWidth } }) => {
  const absNum = Math.abs(num);
  const restWidth = fullWidth - width;

  return css`
    position: absolute;
    left: 0;
    ${num === -2 &&
    css`
      left: calc(
        ${-width * ITEM_SIZE_K[1]}px - ${width * ITEM_SIZE_K[2]}px -
          ${theme?.spacing?.(3 * 2)}
      );
      opacity: 0.25;
    `}
    ${num === -1 &&
    css`
      left: calc(${-width * ITEM_SIZE_K[1]}px - ${theme?.spacing?.(3)});
      opacity: 0.5;
    `}
    ${num === 1 &&
    css`
      left: calc(${width - width * ITEM_SIZE_K[1] + (restWidth / 3) * 2}px);
    `}
    ${num === 2 &&
    css`
      left: calc(100% - ${width * ITEM_SIZE_K[2]}px);
    `}
    
    cursor: pointer;
    top: ${absNum ? theme?.spacing?.(absNum === 1 ? 3 : 4.5) : "0"};
    z-index: ${-absNum};
    border-radius: 10px;
    filter: drop-shadow(13px 5px 20px rgba(24, 24, 24, 0.05));

    &,
    * {
      transition: all 700ms ease-in-out;
    }

    * {
      width: ${width * ITEM_SIZE_K[absNum]}px;
    }
  `;
});

export const Carousel: React.FC<Props> = ({ images, width }) => {
  const [active, setActive] = useState(0);
  const [boxRef, { width: fullWidth }] = useElementSize();
  width = Math.min(fullWidth * 0.9, width);

  return (
    <Stack spacing={4}>
      <Box>
        <Box style={{ position: "relative" }} ref={boxRef}>
          {images.map((img, idx) => {
            return (
              <Item
                key={idx}
                styled={{
                  num: idx + active,
                  width,
                  fullWidth,
                }}
                onClick={() => setActive(-idx)}
              >
                {images[idx]}
              </Item>
            );
          })}
        </Box>
        <Box sx={{ opacity: 0, pointerEvents: "none", width }}>{images[0]}</Box>
      </Box>
      <Stack
        direction="row"
        flex={1}
        justifyContent="space-between"
        width={width}
        maxWidth="100%"
      >
        <Box>
          {active !== 0 && (
            <Button
              variant="contained"
              svgColoredParams={[]}
              onClick={() => {
                setActive(0);
              }}
              endIcon={<Repeat />}
              size="large"
            />
          )}
        </Box>
        <Stack direction="row" spacing={3}>
          {active < 0 && (
            <Button
              variant="contained"
              svgColoredParams={[]}
              onClick={() => {
                setActive((a) => a + 1);
              }}
              endIcon={<ArrowLeft />}
              size="large"
            />
          )}
          {active > -images.length + 1 && (
            <Button
              variant="contained"
              svgColoredParams={[]}
              onClick={() => {
                setActive((a) => a - 1);
              }}
              endIcon={<ArrowRight />}
              size="large"
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
