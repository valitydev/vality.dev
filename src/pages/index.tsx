import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const Main = styled.div`
  padding: 0;
  margin: 0;
`;

const Header = styled.header`
  background-color: #000c1f;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Main>
      <Header>
        <Logo />
        <ul>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </Header>
      <div className="emoji">👀</div>
      <p className="text">Check back soon...</p>
    </Main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Vality</title>;
