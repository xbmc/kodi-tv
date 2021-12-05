import React from "react";
import { graphql } from "gatsby";
import Page from "../components/Page";

export default function PageTemplate({ data, pageContext, location }) {
  return <Page onePage={data.onePage} />;
}

export const pageQuery = graphql`
  query ($slug: String!) {
    onePage: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        breadcrumbs
        description
      }
      rawMarkdownBody
    }
  }
`;
