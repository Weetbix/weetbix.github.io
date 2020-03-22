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

          {/* <h3>caption</h3>
          <span>{project.details.caption}</span>
          <h3>category</h3>
          <span>{project.details.category}</span>
          <h3>date</h3>
          <span>{project.details.date}</span>
          <h3>dateVisual</h3>
          <span>{project.details.dateVisual}</span>
          <h3>languages</h3>
          <span>{project.details.languages}</span>
          <h3>libraries</h3>
          <span>{project.details.libraries}</span>
          <h3>summary</h3>
          <span>{project.details.summary}</span>
          <h3>team</h3>
          <span>{project.details.team}</span>
          <h3>video_url</h3>
          <span>{project.details.video_url}</span>
          <h3>title</h3>
          <span>{project.details.title}</span> */}
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
