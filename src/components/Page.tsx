import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "./Sidebar";

const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, Arial, "Lucida Grande", sans-serif;
    color:   #707070
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

const A: React.FunctionComponent = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default A;
