import React, { ReactNode, useState } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";

import ArrowLeft from "~/assets/svg/arrow-left.svg";
import ArrowRight from "~/assets/svg/arrow-right.svg";
import Repeat from "~/assets/svg/repeat.svg";

import { IconButton } from "./IconButton";

interface Props {
  images: ReactNode[];
}

const WIDTH = 464;

const Item = styled(Box)<{ num: number }>(({ num }) => {
  const absNum = Math.abs(num);
  return css`
    position: absolute;
    left: 0;
    ${num === -2 &&
    css`
      transform: translateX(calc(-100% - ${WIDTH * 0.75}px - ${24 * 2}px));
    `}
    ${num === -1 &&
    css`
      transform: translateX(calc(-100% - 24px));
    `}
    ${num === 1 &&
    css`
      left: calc(50% + ${WIDTH / 4}px);
      transform: translateX(-50%);
    `}
    ${num === 2 &&
    css`
      left: 100%;
      transform: translateX(-100%);
    `}
    
    cursor: pointer;
    top: ${absNum === 2 ? 36 : absNum === 1 ? 24 : 0}px;
    z-index: ${-absNum};
    border-radius: 10px;
    filter: drop-shadow(13px 5px 20px rgba(24, 24, 24, 0.05));
    backdrop-filter: blur(15px);

    &,
    * {
      transition: all 700ms ease-in-out;
    }

    * {
      width: ${WIDTH * (absNum === 1 ? 0.75 : absNum >= 2 ? 0.52 : 1)}px;
    }
  `;
});

export const Carousel: React.FC<Props> = ({ images }) => {
  const [active, setActive] = useState(0);

  return (
    <Stack spacing={4}>
      <Box>
        <Box style={{ position: "relative" }}>
          {images.map((img, idx) => {
            return (
              <Item
                key={idx}
                num={idx + active}
                onClick={() => setActive(-idx)}
              >
                {images[idx]}
              </Item>
            );
          })}
        </Box>
        <Box sx={{ opacity: 0 }} style={{ pointerEvents: "none" }}>
          {images[0]}
        </Box>
      </Box>
      <Stack
        direction="row"
        flex={1}
        justifyContent="space-between"
        width={WIDTH}
        maxWidth="100%"
      >
        <Box>
          {active !== 0 && (
            <IconButton
              variant="contained"
              svgColoredParams={[]}
              onClick={() => {
                setActive(0);
              }}
            >
              <Repeat />
            </IconButton>
          )}
        </Box>
        <Stack direction="row" spacing={3}>
          {active < 0 && (
            <IconButton
              variant="contained"
              svgColoredParams={[]}
              onClick={() => {
                setActive((a) => a + 1);
              }}
            >
              <ArrowLeft />
            </IconButton>
          )}
          {active > -images.length + 1 && (
            <IconButton
              variant="contained"
              svgColoredParams={[]}
              onClick={() => {
                setActive((a) => a - 1);
              }}
            >
              <ArrowRight />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
