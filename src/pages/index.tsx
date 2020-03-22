import * as React from "react";
import Link from "gatsby-link";
import Page from "../components/Page";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 25px;
  }
`;

const ContentContainer = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  max-width: 800px;
`;

const PageHeader = styled.h1`
  line-height: 30px;
  margin-top: 130px;
  margin-bottom: 180px;
`;

const LinkContainer = styled.div`
  margin-top: 110px;
  h1 {
    display: inline;
    margin-right: 30px;
  }
`;

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
          <LinkContainer>
            <h1>
              <Link to="/projects">Projects</Link>
            </h1>
            <h1>
              <Link to="/photography">Photography</Link>
            </h1>
            <h1>
              <Link to="/social">Social</Link>
            </h1>
          </LinkContainer>
        </ContentContainer>
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
