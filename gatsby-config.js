module.exports = {
  siteMetadata: {
    title: `Menon`,
    // siteUrl: ``,
    // description: ``,
  },

  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
