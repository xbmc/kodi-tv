const path = require(`path`)
const slugify = require("slugify")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require('gatsby-awesome-pagination');

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

  const blogPostTemplate = require.resolve(`./src/templates/blog-post.tsx`)

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

  paginate({
    createPage,
    items: result.data.allMarkdownRemark.edges,
    itemsPerPage: 20,
    pathPrefix: '/blog',
    component: path.resolve('src/templates/blog-index.tsx')
  });

  const addonresults = await graphql(`
    query MyQuery {
      allMatrixAddon {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  addonresults.data.allMatrixAddon.edges.forEach(({ node }) => {
    createPage({
      path: "addons/matrix/" + node.slug,
      component: path.resolve(`src/templates/matrix/addon.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  const categoryresults = await graphql(`
    query MyQuery {
      allMatrixCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  categoryresults.data.allMatrixCategory.edges.forEach(({ node }) => {
    createPage({
      path: "addons/matrix/category/" + node.slug,
      component: path.resolve(`src/templates/matrix/category.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  const authorresults = await graphql(`
    query MyQuery {
      allMatrixAuthor {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  authorresults.data.allMatrixAuthor.edges.forEach(({ node }) => {
    createPage({
      path: "addons/matrix/author/" + node.slug,
      component: path.resolve(`src/templates/matrix/author.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  const distresults = await graphql(`
    query MyQuery {
      allDistributionYaml {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  distresults.data.allDistributionYaml.edges.forEach(({ node }) => {
    createPage({
      path: "download/" + slugify(node.name, { lower: true }),
      component: path.resolve(`src/templates/distribution.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        name: node.name,
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