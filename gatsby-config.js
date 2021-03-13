const path = require(`path`);
require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});
const config = require(`./gatsby-site-config`);

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/yaml`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve(`./src/components/layout.tsx`) },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-kodi-tv`,
        short_name: `website`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/kodi-logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-kodidonorwall",
      options: {
        typeName: "Donor",
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_KEY,
        region: "us-east-1",
        params: {
          TableName: process.env.AWS_DBNAME,
          IndexName: "all",
          Limit: 30,
          ProjectionExpression: "id,createdAt,amount,currency,provider,publicName",
          ScanIndexForward: false,
          KeyConditionExpression: "dummy=:dummyval",
          ExpressionAttributeValues: { ":dummyval": "1" },
          // OTHER PARAMS HERE
        },
      },
    },
    {
      resolve: "gatsby-source-kodiaddon",
      options: {
        kodiversions: ["leia", "matrix"],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
  ],
};
