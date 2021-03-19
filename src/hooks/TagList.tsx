import { useStaticQuery, graphql } from "gatsby";

export const TagList = () => {
  const { allTags } = useStaticQuery(graphql`
    query TagListQuery {
      allTags: allMarkdownRemark {
        distinct(field: frontmatter___tags)
      }
    }
  `);
  return allTags.distinct;
};
