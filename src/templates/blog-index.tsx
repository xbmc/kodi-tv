import React from "react";
import { graphql } from "gatsby";
import Pager from "src/components/Pager";
import { DefaultLayout } from "src/components/layout";
import { BlogPostCard } from "src/components/blog";

export default function BlogIndexPage({ data, pageContext, location }) {
  let frontmatter = { title: "News", breadcrumbs: "News" };
  return (
    <DefaultLayout frontmatter={frontmatter}>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {data.blogPosts.edges.map((edge, index) => (
          <BlogPostCard post={edge.node} />
        ))}
      </div>
      {pageContext == undefined ? "" : <Pager pageContext={pageContext} />}
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    blogPosts: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { collection: { eq: "blog" } } }
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
  }
`;
