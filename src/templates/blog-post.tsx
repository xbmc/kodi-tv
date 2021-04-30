import React from "react";
import { graphql } from "gatsby";
import BlogPost from "../components/BlogPost";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  return <BlogPost blogPost={data.blogPost} />;
}

export const pageQuery = graphql`
  query($slug: String!) {
    blogPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      excerpt(pruneLength: 195)
      timeToRead
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
`;
