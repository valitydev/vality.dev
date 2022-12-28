import React, { CSSProperties } from "react";

import { css } from "@emotion/css";

export const BackgroundImageBox: React.FC<
  {
    src: string;
    children: React.ReactNode;
  } & Pick<CSSProperties, "left" | "top" | "right" | "bottom">
> = ({ children, src, ...imgStyle }) => {
  return (
    <div
      className={css`
        position: relative;
      `}
    >
      <div
        className={css`
          position: relative;
          z-index: 1;
        `}
      >
        {children}
      </div>

      <img
        src={src}
        className={css`
          position: absolute;
          z-index: 0;
        `}
        style={imgStyle}
      />
    </div>
  );
};
