import React from "react";
import { graphql } from "gatsby";
import { DefaultLayout } from "src/components/layout";
import BlogIndexLayout from "src/components/BlogIndexLayout";

export default function BlogIndexPage({ data, pageContext, location }) {
  let frontmatter = { title: "News", breadcrumbs: "News" };
  return (
    <DefaultLayout frontmatter={frontmatter}>
      <BlogIndexLayout data={data} pageContext={pageContext} />
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
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
