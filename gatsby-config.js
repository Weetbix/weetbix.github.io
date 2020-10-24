module.exports = {
  siteMetadata: {
    title: `John Hannagan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `johnhannagan.com`,
        customDomain: `plausible.cloud.johnhannagan.com`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-figure-caption`,
          },
        ],
      },
    },
    "gatsby-plugin-graphql-codegen",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
};
