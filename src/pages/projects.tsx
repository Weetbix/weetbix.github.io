import React, { FunctionComponent } from "react";
import Link from "gatsby-link";
import Page from "../components/Page";
import {
  ProjectsPageQuery,
  ProjectSummaryFragFragment
} from "../../graphql-types";

type ProjectProps = ProjectSummaryFragFragment;

const Project: FunctionComponent<ProjectProps> = ({ title, caption }) => {
  return (
    <div>
      <span>{title}</span>
      <br />
      <span>{caption}</span>
    </div>
  );
};

type ProjectsPageProps = {
  data: ProjectsPageQuery;
};

const Projects: FunctionComponent<ProjectsPageProps> = ({ data }) => {
  return (
    <Page>
      <h1>projects</h1>
      {data.allMarkdownRemark.group.map(g =>
        g.nodes.map(n => <Project {...n.frontmatter} />)
      )}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
      group(field: frontmatter___category) {
        totalCount
        category: fieldValue
        nodes {
          frontmatter {
            ...ProjectSummaryFrag
          }
        }
      }
    }
  }
`;
