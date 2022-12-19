import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import UnstyledLogo from "../assets/logo.svg";
import styled from "@emotion/styled";
import { Container, Box } from "@mui/system";

const Logo = styled(UnstyledLogo)`
  height: 32px;
`;

const Header = styled.header``;

const Menu = styled.ul`
  color: #fff;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box sx={{ backgroundColor: "#000c1f" }}>
      <Container fixed>
        <Header>
          <Logo />
          <Menu>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </Menu>
        </Header>
      </Container>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Vality</title>;
