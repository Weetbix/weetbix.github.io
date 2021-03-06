import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { PhotostoryPageQuery } from "../../graphql-types";
import CenteredPage from "../components/CenteredPage";

const StyledPage = styled(CenteredPage)`
  margin-top: 160px;
  margin-bottom: 180px;

  text-align: justify;
  img {
    display: block;
    margin: auto;
    margin-top: 65px;
    margin-bottom: 65px;
    max-width: 100%;
  }

  figcaption {
    text-align: center;
    margin-top: -40px;
    margin-bottom: 40px;
    font-style: italic;
  }
`;

const PhotostoryPage: React.FunctionComponent<{
  data: PhotostoryPageQuery;
}> = ({ data: { photostories } }) => {
  return (
    <StyledPage>
      {photostories.nodes.map((photostory) => {
        return (
          <>
            <h1>{photostory.frontmatter.title}</h1>
            <span>{photostory.frontmatter.date}</span>
            <div dangerouslySetInnerHTML={{ __html: photostory.html }} />
          </>
        );
      })}
    </StyledPage>
  );
};

export const query = graphql`
  query PhotostoryPage($category: String!) {
    photostories: allMarkdownRemark(
      filter: {
        fields: { type: { eq: "photostory" }, category: { eq: $category } }
      }
      sort: { fields: frontmatter___date }
    ) {
      nodes {
        html
        frontmatter {
          date
          title
        }
      }
    }
  }
`;

export default PhotostoryPage;
