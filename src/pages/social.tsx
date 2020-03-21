import * as React from "react";
import Page from "../components/Page";
import styled from "styled-components";
import { FaGithub, FaFlickr, FaInstagram } from "react-icons/fa";

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: #303030;
  padding-left: 35%;
  padding-right: 35%;
`;

const SocialPage: React.FunctionComponent<{}> = () => {
  return (
    <Page>
      <PageContainer>
        <FaFlickr size="100px" />
        <FaGithub size="100px" />
        <FaInstagram size="100px" />
      </PageContainer>
    </Page>
  );
};

export default SocialPage;
