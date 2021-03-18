import React from "react";
import { graphql } from "gatsby";
import { DefaultLayout } from "src/components/Layout";
import { BlogPostCard, NavCard, EmptyCard } from "src/components/Blog";

export default function TagPage({ data, pageContext, location }) {
  let frontmatter = {
    title: "News with the Tag: " + pageContext.tag,
    breadrumbs: "News | " + pageContext.tag,
  };
  let firsttwo = data.blogPosts.edges.slice(0, 2);
  let therest = data.blogPosts.edges.slice(2);
  return (
    <DefaultLayout frontmatter={frontmatter}>
      <div className="mt-12 max-w-lg mx-auto gap-5 hidden lg:grid lg:grid-cols-3 lg:max-w-none">
        {firsttwo.map((edge, index) => (
          <BlogPostCard post={edge.node} />
        ))}
        {firsttwo.length == 1 ? <EmptyCard /> : ""}
        <NavCard />
        {therest.map((edge, index) => (
          <BlogPostCard post={edge.node} />
        ))}
      </div>
      <div className="mt-12 max-w-lg mx-auto gap-5 grid lg:hidden">
        <NavCard />
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
  }
`;
