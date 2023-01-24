import * as React from "react";
import { ReactNode, useState } from "react";
import "yet-another-react-lightbox/styles.css";

import { Stack, Box } from "@mui/system";
import { Lightbox } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import OpenIcon from "~/assets/svg/open-icon.svg";
import { Button } from "~/components/Button";
import { useBreakpointDown } from "~/utils/use-breakpoints";

export const DemoImageBlock: React.FC<{
  title: ReactNode;
  children: ReactNode;
}> = ({ title, children }) => {
  return (
    <Stack spacing={5.5}>
      <Box sx={{ typography: "h3" }}>{title}</Box>
      {children}
    </Stack>
  );
};

export const DemoImage: React.FC<{
  children: ReactNode;
  topDescriptions?: ReactNode;
  bottomDescriptions?: ReactNode;
  arrows?: ReactNode;
  right?: boolean;
  imageSrc?: string;
}> = ({
  topDescriptions,
  bottomDescriptions,
  children,
  arrows,
  right,
  imageSrc,
}) => {
  const isMobile = useBreakpointDown("sm");
  const [open, setOpen] = useState(false);

  return (
    <Stack spacing={1.5}>
      {topDescriptions && (
        <Stack spacing={isMobile ? 1 : 3} alignItems="end" direction="row">
          {topDescriptions}
        </Stack>
      )}
      <Box
        position="relative"
        paddingTop={isMobile ? 1.5 : 0}
        paddingBottom={isMobile ? 1.5 : 0}
      >
        <Box
          width={isMobile ? "200%" : "100%"}
          marginLeft={right ? "-100%" : 0}
        >
          {children}
        </Box>
        {arrows && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              width: "200%",
              right: right ? 0 : "",
            }}
          >
            {arrows}
          </Box>
        )}
        {isMobile && imageSrc && (
          <>
            <Button
              onClick={() => setOpen(true)}
              color="primary"
              endIcon={<OpenIcon />}
              variant="contained"
              svgColoredParams={[]}
              style={{ position: "absolute", bottom: 20, right: 8 }}
            ></Button>
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={[{ src: imageSrc }]}
              plugins={[Zoom]}
              render={{
                buttonPrev: () => null,
                buttonNext: () => null,
              }}
            />
          </>
        )}
      </Box>
      {bottomDescriptions && (
        <Stack spacing={isMobile ? 1 : 3} alignItems="top" direction="row">
          {bottomDescriptions}
        </Stack>
      )}
    </Stack>
  );
};
