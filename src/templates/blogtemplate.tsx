import React from "react"
import {
  Text,
  TextVariants,
  TextContent,
} from "@patternfly/react-core"
import { graphql } from "gatsby"
import Layout from "../gatsby-theme-patternfly/components/Layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <TextContent>
        <Text component={TextVariants.h1}>{frontmatter.title}</Text>
        <Text component={TextVariants.h2}>{frontmatter.date}</Text>
      </TextContent>
      <div
        className="pf-c-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`