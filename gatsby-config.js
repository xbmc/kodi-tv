const topNav = [
  {
    // The text displayed on the item
    title: 'Documentation',
    // The root path that enables/activates the item
    rootPath: '/documentation',
    // The page that is actually linked to when the item is clicked
    path: '/documentation/about'
  }
];

const sideNav = [
  {
    // shows this side nav on the home page
    rootPath: '/',
    nav: [
      {
        // The text displayed on the item
        title: 'Direct link',
        // The page that is linked to
        path: '/direct/link'
      },
      {
        title: 'Expandable link',
        pages: [
          {
            title: 'Expandable link',
            path: '/expandable/link'
          }
        ]
      }
    ]
  }
];

module.exports = {
  siteMetadata: {
    title: 'Kodi TV',
    description: 'The web site for the Kodi media center.',
    author: 'Team Kodi',
  },
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
    {
      resolve: 'gatsby-theme-patternfly',
      options: {
        // enable or disable the top nav (default true)
        useTopNav: true,
        // enable or disable the side navs (default true)
        useSideNav: false,
        // one or more top navigation definitions
        topNav: topNav,
        // one or more side navigation definitions
        sideNav: sideNav
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
