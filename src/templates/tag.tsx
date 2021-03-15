import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogIndexLayout from "../components/BlogIndexLayout";
import MetadataHeader from "../components/SiteMetadata";

export default function TagPage({ data, pageContext, location }) {
  let tagroot = "/blog/tag/";

  return (
    <Layout>
      <MetadataHeader title={pageContext.tag + " | Tags | News"} />
      <h1>News with the Tag: {pageContext.tag}</h1>
      <BlogIndexLayout data={data} />
    </Layout>
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
