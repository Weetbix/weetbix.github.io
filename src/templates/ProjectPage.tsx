import * as React from "react";
import Page from "../components/Page";
import styled from "styled-components";
import { ProjectPageQuery } from "../../graphql-types";

const PageContainer = styled.div``;

const ProjectPage: React.FunctionComponent<ProjectPageQuery> = ({ data }) => {
  const {
    markdownRemark: { html }
  } = data;

  console.log(html);
  return (
    <Page>
      <PageContainer>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PageContainer>
    </Page>
  );
};

export const query = graphql`
  query ProjectPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default ProjectPage;
