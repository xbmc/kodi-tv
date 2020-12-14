import React from "react"
import {
  List,
  ListItem,
  ListVariant,
  Text,
  TextVariants,
  TextContent,
} from "@patternfly/react-core"
import { graphql } from "gatsby"
import Layout from "../gatsby-theme-patternfly/components/Layout"
import MetadataHeader from "src/components/SiteMetadata"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  return (
    <Layout>
      <MetadataHeader title={markdownRemark.frontmatter.title + ' | News'} />
      <div style={{ margin: "20px" }}>
        { markdownRemark.frontmatter.featured_image.trim() == ""
          ? ""
          : <img alt="" src={markdownRemark.frontmatter.featured_image} style={{maxWidth: "900px"}} /> }
        <TextContent>
          <Text component={TextVariants.h1}>{markdownRemark.frontmatter.title}</Text>
        </TextContent>
        <div style={{ marginTop: "-5px" }}>
          <List variant={ListVariant.inline}>
            <ListItem>{markdownRemark.frontmatter.date}</ListItem>
            <ListItem>&bull;</ListItem>
            { markdownRemark.frontmatter.author.trim() == ""
              ? ""
              : <React.Fragment><ListItem>{markdownRemark.frontmatter.author}</ListItem><ListItem>&bull;</ListItem></React.Fragment> }
            <ListItem>{markdownRemark.wordCount.words} words</ListItem>
            <ListItem>&bull;</ListItem>
            <ListItem>{markdownRemark.timeToRead} { markdownRemark.timeToRead == 1 ? "minute" : "minutes" } to read</ListItem>
          </List>
        </div>
        <div
          style={{ marginTop: "10px" }}
          className="pf-c-content"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      timeToRead
      wordCount {
        words
      }
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        featured_image
        title
      }
    }
  }
`
