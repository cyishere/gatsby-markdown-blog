/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Markdown Blog Boilerplate with Gatsby',
    description: 'This is a boilerplate.'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        resolve: `gatsby-remark-prismjs`,
        options: {
          classPrefix: 'language-',
          inlineCodeMarker: null,
          aliases: {
            sh: 'bash'
          },
          showLineNumbers: false,
          noInlineHighlight: false,
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`
      }
    }
  ]
}
