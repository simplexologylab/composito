module.exports = {
  siteMetadata: {
    title: `com·pò·ṣi·to`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@simplexologylab`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipes`,
        path: `${__dirname}/content/recipes`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        name: `recipes`,
        path: `${__dirname}/content/recipes`,
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Composito`,
        short_name: `Composito`,
        start_url: `/`,
        background_color: `#f4e8c1`,
        theme_color: `#f4e8c1`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: "favicons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "favicons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "favicons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "favicons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "favicons/icon-144x144.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "favicons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "favicons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
