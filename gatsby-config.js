const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const config = require("./gatsby-site-config");

// this is an incredibly hacky way to get around a Gatsby bug
// if you load the Netlify CMS in development, you get a bunch of 
// Static Query won't load errors when trying to view the site
// but everything works fine at build
// so this creates a one item list with the Netlify CMS plugin only
// if running in non-development mode and concats it to the plugins list
let netlifyCms = [];
if (process.env.NODE_ENV != "development") {
  netlifyCms.push({
    resolve: "gatsby-plugin-netlify-cms",
    options: { modulePath: `${__dirname}/src/cms/netlify.tsx`, manualInit: true },
  });
}

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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-kodi-tv",
        short_name: "Kodi website",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "static/images/kodi-logo.webp",
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
        },
      },
    },
    {
      resolve: `gatsby-source-kodiaddon`,
      options: {
        kodiversions: ["leia", "matrix"],
      },
    },
  ].concat(netlifyCms),
};
