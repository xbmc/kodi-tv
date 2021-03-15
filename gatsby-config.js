const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const config = require("./gatsby-site-config");

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "markdown-pages",
        path: `src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "yaml-pages",
        path: `src/data/yaml`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve("src/components/layout.tsx") },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-kodi-tv",
        short_name: "Kodi website",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "static/images/kodi-logo.svg",
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  limit: 20
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            match: "^/article/",
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-kodidonorwall`,
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
      resolve: `gatsby-source-kodiaddon`,
      options: {
        kodiversions: ["leia", "matrix"],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // "gatsby-plugin-offline",
  ],
};
