import * as React from "react";
import Link from "gatsby-link";
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

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

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const HomePage: React.FunctionComponent<IndexPageProps> = props => {
  return (
    <Page>
      <PageContainer>
        <ContentContainer>
          <h1>
            I am a software engineer with over 9 years of experience in various
            industries and technologies. Recently I enjoy bringing meaningful
            products to life with web technologies such as Typescript & React.
          </h1>
        </ContentContainer>
        <Sidebar />
      </PageContainer>
    </Page>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
