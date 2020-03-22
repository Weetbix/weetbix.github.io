const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

// Create nodes for all projects under **/projects/<name>/index.ms
const createProjectNode = (node, getNode, actions) => {
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);

    const projectFilepathRegex = /projects\/\w+\/index\.md/;
    const result = fileNode.relativePath.match(projectFilepathRegex);

    if (result) {
      const slug = createFilePath({ node, getNode, basePath: `pages` });
      actions.createNodeField({
        node,
        name: `slug`,
        value: slug
      });
      actions.createNodeField({
        node,
        name: `type`,
        value: `project`
      });
      actions.createNodeField({
        node,
        name: `thumbnail`,
        value: `./thumb.jpg`
      });
    }
  }
};

// Create pages for all projects
const createProjectPages = async (graphql, actions) => {
  const result = await graphql(`
    query getProjectPages {
      allMarkdownRemark(filter: { fields: { type: { eq: "project" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/ProjectPage.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug
      }
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await createProjectPages(graphql, actions);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  createProjectNode(node, getNode, actions);
};
