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
        // Currently when using a custom domain with self-hosted plausible, the script
        // path will incorrectly point to index.js. Here we force the correct path...
        // https://github.com/pixelplicity/gatsby-plugin-plausible/issues/49
        customDomain: `plausible.cloud.johnhannagan.com/js/plausible.js?original=`,
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
