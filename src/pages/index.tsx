import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import UnstyledLogo from "../assets/logo.svg";
import styled from "@emotion/styled";

const Main = styled.div``;

const Logo = styled(UnstyledLogo)`
  height: 32px;
`;

const Header = styled.header`
  background-color: #000c1f;
`;

const Menu = styled.ul`
  color: #fff;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Main>
      <Header>
        <Logo />
        <Menu>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </Menu>
      </Header>
    </Main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Vality</title>;
