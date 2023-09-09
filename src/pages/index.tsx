import * as React from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import CenteredPage from "../components/CenteredPage";
import styled from "styled-components";

const StyledPage = styled(CenteredPage)`
  h1 {
    font-size: 25px;
  }
`;

const LinkContainer = styled.div`
  margin-top: 110px;
  h1 {
    display: inline;
    margin-right: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    margin-top: 50px;
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

const HomePage: React.FunctionComponent<IndexPageProps> = (props) => {
  return (
    <StyledPage showBack={false}>
      <h1>
        I am a software engineer who enjoys bringing meaningful
        products to life with web technologies such as Typescript, React and Vue.
      </h1>
      <LinkContainer>
        <h1>
          <Link to="/projects">Projects</Link>
        </h1>
        <h1>
          <Link to="/photography">Photography</Link>
        </h1>
      </LinkContainer>
    </StyledPage>
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
