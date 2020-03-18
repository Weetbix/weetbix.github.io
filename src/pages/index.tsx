import * as React from "react";
import Link from "gatsby-link";
import Page from "../components/Page";

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
      <h1>
        I am a software engineer with over 9 years of experience in various
        industries and technologies. Recently I enjoy bringing meaningful
        products to life with web technologies such as Typescript & React.
      </h1>
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
