import { useStaticQuery, graphql } from "gatsby";

export const TagCounts = () => {
  const data = useStaticQuery(graphql`
    query TagCountQuery {
      postCount: allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog" } } }
      ) {
        totalCount
      }
      prereleaseCount: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { tags: { in: "Prerelease" } }
        }
      ) {
        totalCount
      }
      releaseCount: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { tags: { in: "Release" } }
        }
      ) {
        totalCount
      }
      communityCount: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { tags: { in: "Community" } }
        }
      ) {
        totalCount
      }
      developerCount: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { tags: { in: "Developer" } }
        }
      ) {
        totalCount
      }
      devConCount: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { tags: { in: "DevCon" } }
        }
      ) {
        totalCount
      }
      allTags: allMarkdownRemark {
        distinct(field: frontmatter___tags)
      }
    }
  `);
  return data;
};
