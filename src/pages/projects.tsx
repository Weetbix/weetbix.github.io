import path from "path";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Page from "../components/Page";
import ProjectSummary from "../components/ProjectSummary";
import { ProjectsPageQuery } from "../../graphql-types";

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
`;

const PageHeader = styled.h1`
  line-height: 30px;
  margin-top: 130px;
  margin-bottom: 180px;
`;

type ProjectsPageProps = {
  data: ProjectsPageQuery;
};

const Projects: FunctionComponent<ProjectsPageProps> = ({ data }) => {
  const projectNameFromPath = filePath => {
    return path.basename(path.dirname(filePath));
  };

  return (
    <Page>
      <PageContainer>
        <ContentContainer>
          <PageHeader>Projects</PageHeader>
          {data.projectSummaries.group.map(g =>
            g.nodes.map(n => {
              const projectName = projectNameFromPath(n.fileAbsolutePath);

              const thumb = data.thumbs.nodes.find(image =>
                image.absolutePath.match(`\/${projectName}\/`)
              ).childImageSharp.fixed;

              return (
                <ProjectSummary
                  title={n.frontmatter.title}
                  summary={n.frontmatter.summary}
                  languages={n.frontmatter.languages}
                  thumb={thumb}
                />
              );
            })
          )}
        </ContentContainer>
      </PageContainer>
    </Page>
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
      filter: { fileAbsolutePath: { glob: "**/projects/**" } }
    ) {
      group(field: frontmatter___category) {
        totalCount
        category: fieldValue
        nodes {
          frontmatter {
            ...ProjectSummaryFrag
          }
          fileAbsolutePath
        }
      }
    }
    thumbs: allFile(
      filter: { absolutePath: { glob: "**/projects/**/thumb.*" } }
    ) {
      nodes {
        childImageSharp {
          fixed(width: 114, height: 114) {
            ...GatsbyImageSharpFixed
          }
        }
        absolutePath
      }
    }
  }
`;
