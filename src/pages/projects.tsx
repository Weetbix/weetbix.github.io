import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { ProjectsPageQuery } from "../../graphql-types";
import CenteredPage from "../components/CenteredPage";
import ProjectSummary from "../components/ProjectSummary";

const PageHeader = styled.h1`
  line-height: 30px;
  margin-top: 180px;
  margin-bottom: 180px;
`;

const StyledProjectSummary = styled(ProjectSummary)`
  margin-bottom: 180px;

  &:hover {
    transform: scale(1.01);
    transition: transform 0.2s;
  }
`;

type ProjectsPageProps = {
  data: ProjectsPageQuery;
};

const Projects: FunctionComponent<ProjectsPageProps> = ({ data }) => {
  return (
    <CenteredPage>
      <PageHeader>Projects</PageHeader>
      {data.projectSummaries.group.map(g =>
        g.nodes.map(n => {
          return (
            <a key={n.fields.slug} href={n.fields.slug}>
              <StyledProjectSummary
                title={n.frontmatter.title}
                summary={n.frontmatter.summary}
                languages={n.frontmatter.languages}
                thumb={n.fields.thumbnail?.childImageSharp?.fixed}
              />
            </a>
          );
        })
      )}
    </CenteredPage>
  );
};

export default Projects;

export const pageQuery = graphql`
  fragment ProjectSummaryFrag on MarkdownRemarkFrontmatter {
    title
    category
    caption
    languages
    libraries
    order
    summary
    team
    date
  }

  query ProjectsPage {
    projectSummaries: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "project" } } }
    ) {
      group(field: frontmatter___category) {
        totalCount
        category: fieldValue
        nodes {
          frontmatter {
            ...ProjectSummaryFrag
          }
          fields {
            slug
            thumbnail {
              ...ProjectThumbnail
            }
          }
        }
      }
    }
  }
`;
