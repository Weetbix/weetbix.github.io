import * as React from "react";
import styled from "styled-components";
import { ProjectPageQuery } from "../../graphql-types";
import Page from "../components/Page";
import ProjectSummary from "../components/ProjectSummary";

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
  max-width: 800px;
  margin-top: 180px;
  margin-bottom: 180px;
`;

const ProjectPage: React.FunctionComponent<{ data: ProjectPageQuery }> = ({
  data: { project }
}) => {
  return (
    <Page>
      <PageContainer>
        <ContentContainer>
          <ProjectSummary
            title={project.details.title}
            summary={project.details.summary}
            languages={project.details.languages}
            thumb={project.fields.thumbnail.childImageSharp.fixed}
          />
          <div dangerouslySetInnerHTML={{ __html: project.html }} />
        </ContentContainer>
      </PageContainer>
    </Page>
  );
};

export const query = graphql`
  fragment ProjectDetails on MarkdownRemarkFrontmatter {
    caption
    category
    date
    dateVisual
    languages
    libraries
    summary
    team
    video_url
    title
  }

  query ProjectPage($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      details: frontmatter {
        ...ProjectDetails
      }
      fields {
        thumbnail {
          ...ProjectThumbnail
        }
      }
    }
  }
`;

export default ProjectPage;
