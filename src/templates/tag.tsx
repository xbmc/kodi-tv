import React from "react";
import { graphql } from "gatsby";
import { DefaultLayout } from "src/components/layout";
import { BlogPostCard } from "src/components/blog";

export default function TagPage({ data, pageContext, location }) {
  let tagroot = "/blog/tag/";
  let frontmatter = {
    title: "News with the Tag: " + pageContext.tag,
    breadrumbs: "News | " + pageContext.tag,
  };

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {data.blogPosts.edges.map((edge, index) => (
          <BlogPostCard post={edge.node} />
        ))}
      </div>
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query($tag: [String]!) {
    blogPosts: allMarkdownRemark(
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
