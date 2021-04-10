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
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (pageresults.errors) {
    reporter.panicOnBuild(`Error while running Pages GraphQL query.`);
    return;
  }

  pageresults.data.Pages.nodes.forEach(page => {
    createPage({
      path: page.fields.slug,
      component: pageTemplate,
      context: {
        slug: page.fields.slug,
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
        nodes {
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
  `);

  if (blogresults.errors) {
    reporter.panicOnBuild(`Error while running Blog Post GraphQL query.`);
    return;
  }

  let posts = blogresults.data.blogPosts.nodes;
  posts.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.fields.slug,
      },
    });
  });

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 20,
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

  if (tagresults.errors) {
    reporter.panicOnBuild(`Error while running Tags GraphQL query.`);
    return;
  }

  let tags = tagresults.data.blogTags.distinct;
  let tagSlug = "";
  tags.forEach(tag => {
    tagSlug = slugify(tag, { lower: true });
    paginate({
      createPage,
      items: posts.filter(post => {
        if (post.frontmatter.tags != undefined) {
          if (post.frontmatter.tags.includes(tag)) {
            return post;
          }
        }
      }),
      itemsPerPage: 20,
      pathPrefix: ({ pageNumber, numberOfPages }) =>
        pageNumber === 0 ? "/blog/tag/" + tagSlug : "/blog/tag/" + tagSlug + "/page",
      component: path.resolve("src/templates/tag.tsx"),
      context: { tag: tag },
    });
  });

  // *** Begin Matrix Addon Page Builds
  const matrixaddonresults = await graphql(`
    query MyQuery {
      allMatrixAddon {
        nodes {
          slug
        }
      }
    }
  `);

  if (matrixaddonresults.errors) {
    reporter.panicOnBuild(`Error while running Matrix Add-on GraphQL query.`);
    return;
  }

  matrixaddonresults.data.allMatrixAddon.nodes.forEach(addon => {
    createPage({
      path: "addons/matrix/" + addon.slug,
      component: path.resolve(`src/templates/matrix/addon.tsx`),
      context: {
        slug: addon.slug,
      },
    });
  });

  const matrixcategoryresults = await graphql(`
    query MyQuery {
      allMatrixCategory {
        nodes {
          slug
        }
      }
    }
  `);

  if (matrixcategoryresults.errors) {
    reporter.panicOnBuild(
      `Error while running Matrix Add-on Category GraphQL query.`
    );
    return;
  }

  matrixcategoryresults.data.allMatrixCategory.nodes.forEach(category => {
    createPage({
      path: "addons/matrix/category/" + category.slug,
      component: path.resolve(`src/templates/matrix/category.tsx`),
      context: {
        slug: category.slug,
      },
    });
  });

  const matrixauthorresults = await graphql(`
    query MyQuery {
      allMatrixAuthor {
        nodes {
          slug
        }
      }
    }
  `);

  if (matrixauthorresults.errors) {
    reporter.panicOnBuild(`Error while running Matrix Add-on Author GraphQL query.`);
    return;
  }

  matrixauthorresults.data.allMatrixAuthor.nodes.forEach(author => {
    createPage({
      path: "addons/matrix/author/" + author.slug,
      component: path.resolve(`src/templates/matrix/author.tsx`),
      context: {
        slug: author.slug,
      },
    });
  });
  // *** End Matrix Addon Page Builds

  // *** Begin Leia Addon Page Builds
  const leiaaddonresults = await graphql(`
    query MyQuery {
      allLeiaAddon {
        nodes {
          slug
        }
      }
    }
  `);

  if (leiaaddonresults.errors) {
    reporter.panicOnBuild(`Error while running Leia Add-on GraphQL query.`);
    return;
  }

  leiaaddonresults.data.allLeiaAddon.nodes.forEach(addon => {
    createPage({
      path: "addons/leia/" + addon.slug,
      component: path.resolve(`src/templates/leia/addon.tsx`),
      context: {
        slug: addon.slug,
      },
    });
  });

  const leiacategoryresults = await graphql(`
    query MyQuery {
      allLeiaCategory {
        nodes {
          slug
        }
      }
    }
  `);

  if (leiacategoryresults.errors) {
    reporter.panicOnBuild(`Error while running Leia Add-on Category GraphQL query.`);
    return;
  }

  leiacategoryresults.data.allLeiaCategory.nodes.forEach(category => {
    createPage({
      path: "addons/leia/category/" + category.slug,
      component: path.resolve(`src/templates/leia/category.tsx`),
      context: {
        slug: category.slug,
      },
    });
  });

  const leiaauthorresults = await graphql(`
    query MyQuery {
      allLeiaAuthor {
        nodes {
          slug
        }
      }
    }
  `);

  if (leiaauthorresults.errors) {
    reporter.panicOnBuild(`Error while running Leia Add-on Author GraphQL query.`);
    return;
  }

  leiaauthorresults.data.allLeiaAuthor.nodes.forEach(author => {
    createPage({
      path: "addons/leia/author/" + author.slug,
      component: path.resolve(`src/templates/leia/author.tsx`),
      context: {
        slug: author.slug,
      },
    });
  });
  // *** End Leia Addon Page Builds

  const distresults = await graphql(`
    query MyQuery {
      allDistributionYaml {
        nodes {
          name
        }
      }
    }
  `);

  if (distresults.errors) {
    reporter.panicOnBuild(`Error while running Distributions GraphQL query.`);
    return;
  }

  distresults.data.allDistributionYaml.nodes.forEach(dist => {
    createPage({
      path: "download/" + slugify(dist.name, { lower: true }),
      component: path.resolve(`src/templates/distribution.tsx`),
      context: {
        name: dist.name,
      },
    });
  });
};
