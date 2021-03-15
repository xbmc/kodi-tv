const path = require(`path`);
const slugify = require("slugify");
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paginate } = require("gatsby-awesome-pagination");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve(`./src/templates/blog-post.tsx`);

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
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    });
  });

  //   paginate({
  //     createPage,
  //     items: result.data.allMarkdownRemark.edges,
  //     itemsPerPage: 20,
  //     pathPrefix: "/blog",
  //     component: path.resolve("src/templates/blog-index.tsx"),
  //   });

  //   const tagresults = await graphql(`
  //     query MyQuery {
  //       allMarkdownRemark {
  //         distinct(field: frontmatter___tags)
  //       }
  //     }
  //   `);

  //   tagresults.data.allMarkdownRemark.distinct.forEach(tag => {
  //     createPage({
  //       path: "blog/tag/" + slugify(tag, { lower: true }),
  //       component: path.resolve(`src/templates/tag.tsx`),
  //       context: {
  //         // Data passed to context is available
  //         // in page queries as GraphQL variables.
  //         tag: tag,
  //       },
  //     });
  //   });

  // *** Begin Matrix Addon Page Builds
  const matrixaddonresults = await graphql(`
    query MyQuery {
      allMatrixAddon {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  matrixaddonresults.data.allMatrixAddon.edges.forEach(({ node }) => {
    createPage({
      path: "addons/matrix/" + node.slug,
      component: path.resolve(`src/templates/matrix/addon.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });

  const matrixcategoryresults = await graphql(`
    query MyQuery {
      allMatrixCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  matrixcategoryresults.data.allMatrixCategory.edges.forEach(({ node }) => {
    createPage({
      path: "addons/matrix/category/" + node.slug,
      component: path.resolve(`src/templates/matrix/category.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });

  const matrixauthorresults = await graphql(`
    query MyQuery {
      allMatrixAuthor {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  matrixauthorresults.data.allMatrixAuthor.edges.forEach(({ node }) => {
    createPage({
      path: "addons/matrix/author/" + node.slug,
      component: path.resolve(`src/templates/matrix/author.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });
  // *** End Matrix Addon Page Builds

  // *** Begin Leia Addon Page Builds
  const leiaaddonresults = await graphql(`
    query MyQuery {
      allLeiaAddon {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  leiaaddonresults.data.allLeiaAddon.edges.forEach(({ node }) => {
    createPage({
      path: "addons/leia/" + node.slug,
      component: path.resolve(`src/templates/leia/addon.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });

  const leiacategoryresults = await graphql(`
    query MyQuery {
      allLeiaCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  leiacategoryresults.data.allLeiaCategory.edges.forEach(({ node }) => {
    createPage({
      path: "addons/leia/category/" + node.slug,
      component: path.resolve(`src/templates/leia/category.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });

  const leiaauthorresults = await graphql(`
    query MyQuery {
      allLeiaAuthor {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  leiaauthorresults.data.allLeiaAuthor.edges.forEach(({ node }) => {
    createPage({
      path: "addons/leia/author/" + node.slug,
      component: path.resolve(`src/templates/leia/author.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });
  // *** End Leia Addon Page Builds

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
  `);

  distresults.data.allDistributionYaml.edges.forEach(({ node }) => {
    createPage({
      path: "download/" + slugify(node.name, { lower: true }),
      component: path.resolve(`src/templates/distribution.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        name: node.name,
      },
    });
  });
};
