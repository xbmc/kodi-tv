const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const config = require("./gatsby-site-config");

module.exports = {
  siteMetadata: config.siteMetadata,
  flags: { PRESERVE_WEBPACK_CACHE: true, FAST_DEV: true, DEV_SSR: true },
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
        name: "blog",
        path: `src/content/article`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pagesrc",
        path: `src/content/pages`,
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
        defaultLayouts: { default: path.resolve("src/components/LayoutMdx.tsx") },
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
            serialize: ({ query: { site, blogPosts } }) => {
              return blogPosts.edges.map(edge => {
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
                blogPosts: allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: {fields: {collection: {eq: "blog"}}}
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/netlify.tsx`,
      },
    },
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
