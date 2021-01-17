const path = require("path")
const config = require("./gatsby-site-config")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const topNav = [
  {
    // The text displayed on the item
    title: "About",
    // The root path that enables/activates the item
    rootPath: "/about",
    // The page that is actually linked to when the item is clicked
    path: "/about",
  },
  {
    // The text displayed on the item
    title: "News",
    // The root path that enables/activates the item
    rootPath: "/blog",
    // The page that is actually linked to when the item is clicked
    path: "/blog",
  },
  {
    // The text displayed on the item
    title: "Download",
    // The root path that enables/activates the item
    rootPath: "/Download",
    // The page that is actually linked to when the item is clicked
    path: "/download",
  },
  {
    // The text displayed on the item
    title: "Add-ons",
    // The root path that enables/activates the item
    rootPath: "/addons",
    // The page that is actually linked to when the item is clicked
    path: "/addons",
  },
  {
    // The text displayed on the item
    title: "Forum",
    // The root path that enables/activates the item
    rootPath: "/forum",
    // The page that is actually linked to when the item is clicked
    path: "https://forum.kodi.tv",
  },
  {
    // The text displayed on the item
    title: "Wiki",
    // The root path that enables/activates the item
    rootPath: "/wiki",
    // The page that is actually linked to when the item is clicked
    path: "https://kodi.wiki",
  },
  {
    // The text displayed on the item
    title: "Contribute",
    // The root path that enables/activates the item
    rootPath: "/contribute",
    // The page that is actually linked to when the item is clicked
    path: "/contribute",
  },
  {
    // The text displayed on the item
    title: "Donate",
    // The root path that enables/activates the item
    rootPath: "/donate",
    // The page that is actually linked to when the item is clicked
    path: "/donate",
  },
  {
    // The text displayed on the item
    title: "Store",
    // The root path that enables/activates the item
    rootPath: "/store",
    // The page that is actually linked to when the item is clicked
    path: "/store",
  },
]

const sideNav = [
  {
    rootPath: "/about",
    menuType: "submenu",
    nav: [
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Contact",
        path: "/about/contact",
      },
      {
        title: "Sponsors",
        path: "/about/sponsors",
      },
      {
        title: "Software",
        path: "/about/software",
      },
      {
        title: "Foundation",
        path: "/about/foundation",
      },
    ],
  },
  {
    rootPath: "/addons",
    menuType: "submenu",
    nav: [
      {
        title: "Add-Ons",
        path: "/addons",
      },
      {
        title: "Search Add-Ons",
        path: "/addons/search",
      },
      {
        title: "Top Authors",
        path: "/addons/top-authors",
      },
    ],
  },
  {
    rootPath: "/donate",
    menuType: "submenu",
    nav: [
      {
        title: "Donate",
        path: "/donate",
      },
      {
        title: "Donor Wall",
        path: "/donate/wall",
      },
    ],
  },
  {
    // DO NOT DELETE THIS DICT
    // the side nav requires at least one item (even if not used) that has an expandable link
    // if you remove this everything will fail, I repeat
    // DO NOT DELETE THIS DICT
    rootPath: "DONOTDELETETHIS",
    menuType: "none",
    nav: [
      {
        // The text displayed on the item
        title: "Direct link",
        // The page that is linked to
        path: "/direct/link",
      },
      {
        title: "Expandable link",
        pages: [
          {
            title: "Expandable link",
            path: "/expandable/link",
          },
        ],
      },
    ],
  },
]

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify-cms",
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
                })
              })
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "src/images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: "src/content",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        images: path.join(__dirname, "src/images"),
        pages: path.join(__dirname, "src/pages"),
        node_modules: path.join(__dirname, "node_modules"),
        patternfly_components: path.join(
          __dirname,
          "node_modules/gatsby-theme-patternfly/src/components"
        ),
      },
    },
    {
      resolve: "gatsby-theme-patternfly",
      options: {
        // enable or disable the top nav (default true)
        useTopNav: true,
        // enable or disable the side navs (default true)
        useSideNav: true,
        // one or more top navigation definitions
        topNav: topNav,
        // one or more side navigation definitions
        sideNav: sideNav,
      },
    },
    {
      resolve: 'gatsby-source-kodidonorwall',
      options: {
        typeName: 'Donor',
        accessKeyId: process.env.AWS_ID, 
        secretAccessKey: process.env.AWS_KEY,
        region: 'us-east-1',
        params: {
          TableName : process.env.AWS_DBNAME,
          IndexName: 'all',
          Limit: 30,
          ProjectionExpression: 'id,createdAt,amount,currency,provider,publicName',
          ScanIndexForward: false,
          KeyConditionExpression: 'dummy=:dummyval',
          ExpressionAttributeValues: {":dummyval":"1"},
          // OTHER PARAMS HERE
        }
      }
    },
    {
      resolve: "gatsby-source-kodiaddon",
      options: {
        kodiversion: "matrix",
        kodimirror: "ftp.halifax.rwth-aachen.de/xbmc",
      },
    },
    "gatsby-source-kodidists",
    "gatsby-source-kodistore",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
