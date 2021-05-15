/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          'components': path.resolve(__dirname, './src/components'),
          'images': path.resolve(__dirname, './src/images')
        },
        extensions: [ '.jpeg', '.ts', '.tsx' ]
      }
    }
  ]
}
