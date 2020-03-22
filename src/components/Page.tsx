import * as React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;    
    /** Todo, build font stack */
    font-family: "Helvetica Neue";
    color:   #707070;
    font-weight: 200;
}

h1 {
    font-size: 30px;
    letter-spacing: 1px;
    line-height: 50px;
    font-weight: 300;
}

h1, h2, span {
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
