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
        name: "src-pages",
        path: `${__dirname}/src`,
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
