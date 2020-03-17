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
      <h1>Hi people</h1>
      <p>
        Welcome to your new{" "}
        <strong>{props.data.site.siteMetadata.title}</strong> site.
      </p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
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
