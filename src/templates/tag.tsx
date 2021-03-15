import React from "react";
import { graphql } from "gatsby";
import { DefaultLayout } from "src/components/layout";
import BlogIndexLayout from "src/components/BlogIndexLayout";

export default function TagPage({ data, pageContext, location }) {
  let tagroot = "/blog/tag/";
  let frontmatter = {
    title: "News with the Tag: " + pageContext.tag,
    breadrumbs: "News | " + pageContext.tag,
  };

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <BlogIndexLayout data={data} />
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query($tag: [String]!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: $tag } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          timeToRead
          wordCount {
            words
          }
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
    allTags: allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
  }
`;
