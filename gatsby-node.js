const path = require(`path`);
const slugify = require("slugify");
const { createFilePath } = require(`gatsby-source-filesystem`);
const { paginate } = require("gatsby-awesome-pagination");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);
    let collection = parent.sourceInstanceName;
    let prepend = "";
    if (collection === "blog") {
      prepend = "/article";
    }
    const value = prepend + createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
    createNodeField({
      node,
      name: "collection",
      value: collection,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  
  const pageTemplate = require.resolve(`./src/templates/page.tsx`);
  
  const pageresults = await graphql(`
    {
      Pages: allMarkdownRemark(
        filter: { fields: { collection: { eq: "pagesrc" } } }
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
  if (pageresults.errors) {
    reporter.panicOnBuild(`Error while running Pages GraphQL query.`);
    return;
  }

  pageresults.data.Pages.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: pageTemplate,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    });
  });  

  const blogPostTemplate = require.resolve(`./src/templates/blog-post.tsx`);

  const blogresults = await graphql(`
    {
      blogPosts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { collection: { eq: "blog" } } }
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
  if (blogresults.errors) {
    reporter.panicOnBuild(`Error while running Blog Post GraphQL query.`);
    return;
  }

  blogresults.data.blogPosts.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    });
  });

  paginate({
    createPage,
    items: blogresults.data.blogPosts.edges,
    itemsPerPage: 21,
    pathPrefix: ({ pageNumber, numberOfPages }) =>
      pageNumber === 0 ? "/blog" : "/blog/page",
    component: path.resolve("src/templates/blog-index.tsx"),
  });

  const tagresults = await graphql(`
    query MyQuery {
      blogTags: allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog" } } }
      ) {
        distinct(field: frontmatter___tags)
      }
    }
  `);

  // Handle errors
  if (tagresults.errors) {
    reporter.panicOnBuild(`Error while running Tags GraphQL query.`);
    return;
  }

  tagresults.data.blogTags.distinct.forEach(tag => {
    createPage({
      path: "blog/tag/" + slugify(tag, { lower: true }),
      component: path.resolve(`src/templates/tag.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        tag: tag,
      },
    });
  });

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
  
  // Handle errors
  if (matrixaddonresults.errors) {
    reporter.panicOnBuild(`Error while running Matrix Add-on GraphQL query.`);
    return;
  }

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

  // Handle errors
  if (matrixcategoryresults.errors) {
    reporter.panicOnBuild(`Error while running Matrix Add-on Category GraphQL query.`);
    return;
  }

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

  // Handle errors
  if (matrixauthorresults.errors) {
    reporter.panicOnBuild(`Error while running Matrix Add-on Author GraphQL query.`);
    return;
  }

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

  // Handle errors
  if (leiaaddonresults.errors) {
    reporter.panicOnBuild(`Error while running Leia Add-on GraphQL query.`);
    return;
  }

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

  // Handle errors
  if (leiacategoryresults.errors) {
    reporter.panicOnBuild(`Error while running Leia Add-on Category GraphQL query.`);
    return;
  }

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

  // Handle errors
  if (leiaauthorresults.errors) {
    reporter.panicOnBuild(`Error while running Leia Add-on Author GraphQL query.`);
    return;
  }

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

  // Handle errors
  if (distresults.errors) {
    reporter.panicOnBuild(`Error while running Distributions GraphQL query.`);
    return;
  }

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
