const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const addonresults = await graphql(`
      query MyQuery {
          allAddon {
              edges {
                  node {
                      slug
                  }
              }
          }
      }
  `)
  
  addonresults.data.allAddon.edges.forEach(({ node }) => {
    createPage({
      path: 'addons/' + node.slug,
      component: path.resolve(`src/templates/addon.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })


  const categoryresults = await graphql(`
      query MyQuery {
          allCategory {
              edges {
                  node {
                      slug
                  }
              }
          }
      }
  `)
  
  categoryresults.data.allCategory.edges.forEach(({ node }) => {
    createPage({
      path: 'addons/category/' + node.slug,
      component: path.resolve(`src/templates/category.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  const authorresults = await graphql(`
      query MyQuery {
          allAuthor {
              edges {
                  node {
                      slug
                  }
              }
          }
      }
  `)
  
  authorresults.data.allAuthor.edges.forEach(({ node }) => {
    createPage({
      path: 'addons/author/' + node.slug,
      component: path.resolve(`src/templates/author.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })


/*  const addonresults = await graphql(`
      query MyQuery {
          allAddon {
              edges {
                  node {
                      slug
                  }
              }
          }
      }
  `)
  
  addonresults.data.allAddon.edges.forEach(({ node }) => {
    createPage({
      path: 'addons/' + node.slug,
      component: path.resolve(`./src/templates/addon.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  }) */

}
