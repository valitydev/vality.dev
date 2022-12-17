import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

const Main = styled.div`
  background-color: #fff;
  color: #000;
  font-family: helvetica, arial, sans-serif;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .emoji {
    font-size: 9rem;
    text-align: center;
  }
  .text {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: grey;
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Main>
      <div className="emoji">👀</div>
      <p className="text">Check back soon...</p>
    </Main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Vality</title>;
