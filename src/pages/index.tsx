import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import UnstyledLogo from "../assets/svg/logo.svg";
import { Container, Box, Stack, styled, Theme } from "@mui/system";
import fintechImgSrc from "../images/fintech.png";

const Logo = styled(UnstyledLogo)(({ theme }: { theme: Theme }) => ({
  width: "auto",
  height: 32,

  [theme.breakpoints.down("lg")]: {
    height: 24,
  },
}));

const FintechImg = styled("img")(({ theme }: { theme: Theme }) => ({
  marginRight: -47,
  marginTop: -20,

  [theme?.breakpoints.down("lg")]: {
    width: 297,
  },
}));

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box sx={{ backgroundColor: "#000c1f", color: "#fff" }}>
      <Container fixed>
        <Stack spacing={6}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={2}
            alignItems="center"
            sx={{ pt: 2, pb: 2 }}
          >
            <Logo />
            <Stack direction="row" spacing={2}>
              <Box>Наши продукты</Box>
              <Box>Процессинг</Box>
              <Box>Антифрод</Box>
              <Box>Контакты</Box>
            </Stack>
            <Box>RU | EN</Box>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Stack spacing={3}>
              <Box sx={{ typography: "h1" }}>
                Мы it-команда, делающая fintech{" "}
                <span style={{ color: "#FD932B" }}>доступным</span>
              </Box>
              <Box>
                Наши продукты распространяются по модели{" "}
                <span style={{ whiteSpace: "nowrap" }}>Open-Source</span>{" "}
                Software и позволяют каждому построить свой бизнес на основе
                нашего кода.
              </Box>
            </Stack>
            <Box>
              <FintechImg src={fintechImgSrc} />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Vality</title>;
