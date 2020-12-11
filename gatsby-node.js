const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogtemplate.tsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    })
  })

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
      path: "addons/" + node.slug,
      component: path.resolve(`src/templates/addon.tsx`),
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
      path: "addons/category/" + node.slug,
      component: path.resolve(`src/templates/category.tsx`),
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
      path: "addons/author/" + node.slug,
      component: path.resolve(`src/templates/author.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  const distresults = await graphql(`
    query MyQuery {
      allDistribution {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  distresults.data.allDistribution.edges.forEach(({ node }) => {
    createPage({
      path: "download/" + node.slug,
      component: path.resolve(`src/templates/distribution.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}

// this fixes a slew of build warnings
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}