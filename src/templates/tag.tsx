import React from "react"
import { graphql } from "gatsby"
import {
  Text,
  TextVariants,
  TextContent,
} from "@patternfly/react-core"
import Layout from "../gatsby-theme-patternfly/components/Layout"
import BlogIndexLayout from "src/components/BlogIndexLayout"
import MetadataHeader from "src/components/SiteMetadata"

export default function TagPage( { data, pageContext, location } ) {
  let tagroot = '/blog/tag/'
  
  return (
    <Layout>
      <MetadataHeader title={pageContext.tag + " | Tags | News"} />
      <TextContent>
        <Text component={TextVariants.h1}>News with the Tag: {pageContext.tag}</Text>
      </TextContent>
      <BlogIndexLayout data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($tag: [String]!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      filter: {frontmatter: {tags: {in:	$tag}}},
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
`
