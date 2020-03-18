import * as React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  ul {
    list-style-type: none;
    text-align: right;
  }
`;

const SidebarContent = styled.div``;

export default () => (
  <SidebarContainer>
    <SidebarContent>
      <ul>
        <li>
          <h1>Projects</h1>
        </li>
        <li>
          <h1>Photography</h1>
        </li>
        <li>
          <h1>Social</h1>
        </li>
      </ul>
    </SidebarContent>
  </SidebarContainer>
);
