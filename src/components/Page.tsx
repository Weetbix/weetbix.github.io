import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "./Sidebar";

const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
    color:   #333
}

h1 {
    font-size: 30px;
    letter-spacing: 1px;
    line-height: 50px;
    font-weight: 200;
}

html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
}   

div[role="group"][tabindex] {
    height: 100%;
}
`;

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const ContentContainer = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  max-width: 50%;
`;

const A: React.FunctionComponent = ({ children }) => (
  <>
    <GlobalStyle />
    <PageContainer>
      <ContentContainer>{children}</ContentContainer>
      <Sidebar />
    </PageContainer>
  </>
);

export default A;
