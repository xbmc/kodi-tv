import React from "react";
import { graphql } from "gatsby";
import { DefaultLayout } from "../components/Layout";
import Pager from "../components/Pager";
import { BlogPostCard, NavCard, EmptyCard } from "../components/Blog";

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
      {pageContext == undefined ? "" : <Pager pageContext={pageContext} />}
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query($tag: [String]!, $skip: Int!, $limit: Int!) {
    blogPosts: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: $tag } } }
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
