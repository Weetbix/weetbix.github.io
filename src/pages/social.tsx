import * as React from "react";
import { FaFlickr, FaGithub, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import Page from "../components/Page";

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: #303030;
  padding-left: 35%;
  padding-right: 35%;

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
    padding-bottom: 3px;

    :hover {
      color: #ffc785;
      padding-bottom: 14px;
      transition: padding 0.1s;
    }
  }
`;

const SocialPage: React.FunctionComponent<{}> = () => {
  return (
    <Page>
      <PageContainer>
        <a href="https://www.flickr.com/photos/77862175@N06/">
          <FaFlickr size="100px" />
        </a>
        <a href="https://github.com/Weetbix">
          <FaGithub size="100px" />
        </a>
        <a href="http://instagram.com/adv_travel">
          <FaInstagram size="100px" />
        </a>
      </PageContainer>
    </Page>
  );
};

export default SocialPage;