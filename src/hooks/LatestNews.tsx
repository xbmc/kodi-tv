import { useStaticQuery, graphql } from "gatsby";

export const LatestNews = () => {
  const { blogPosts } = useStaticQuery(graphql`
    query {
      blogPosts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fields: { collection: { eq: "blog" } } }
        limit: 3
      ) {
        edges {
          node {
            excerpt(pruneLength: 300)
            timeToRead
            fields {
              slug
            }
            frontmatter {
              author
              date(formatString: "MMMM DD, YYYY")
              tags
              featured_image {
                alt
                src
                title
              }
              title
            }
          }
        }
      }
    }
  `);
  return blogPosts.edges;
};
