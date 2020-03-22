import * as React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    /** Todo, build font stack */
    font-family: "Helvetica Neue";
    color:   #707070;
    font-weight: 200;
    line-height: 24px;
    font-size: 18px;
    letter-spacing: 1px
}

h1 {
    font-size: 30px;
    letter-spacing: 1px;
    line-height: 50px;
    font-weight: 300;
}

h1, h2, h3, h4 {
  font-weight: 300;
  letter-spacing: 2px;
}

h2, h3, h4 {
  margin-top: 65px;
}

h1, h2, h3, h4, span, p, li {
    >a, >a:visited, >a:hover, >a:active {
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid #DDD;
        padding-bottom: 3px;

        :hover {
            color: #ffc785;
            padding-bottom: 6px;
            transition: padding 0.1s;
        }
    }
}

a {
  text-decoration: none;
  color: inherit
}

li {
  margin-bottom: 5px;
}

li > p {
  margin-top: 0;
  margin-bottom: 5px;
}

strong { 
  font-weight: 350;
}

blockquote {
  border-left: 3px solid #DDD;
  padding-left: 10px;
  font-size: 16px;
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
