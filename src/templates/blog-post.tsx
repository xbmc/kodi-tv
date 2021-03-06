const slugify = require("slugify")

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
import ItemWithComma from "src/components/ItemWithComma"
import MetadataHeader from "src/components/SiteMetadata"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  return (
    <Layout>
      <MetadataHeader title={markdownRemark.frontmatter.title + ' | News'} />
      <div style={{ margin: "20px" }}>
        { markdownRemark.frontmatter.featured_image == undefined 
          ? ""
          : <img alt={markdownRemark.frontmatter.featured_image.alt} title={markdownRemark.frontmatter.featured_image.title} src={markdownRemark.frontmatter.featured_image.src} style={{maxWidth: "100%", maxHeight: "400px", height: "auto"}} /> }
        <TextContent>
          <Text component={TextVariants.h1}>{markdownRemark.frontmatter.title}</Text>
        </TextContent>
        <List variant={ListVariant.inline}>
          <ListItem>&#128358; {markdownRemark.frontmatter.date}</ListItem>
          { markdownRemark.frontmatter.author.trim() == ""
            ? ""
            : <React.Fragment><ListItem>&#128100; {markdownRemark.frontmatter.author}</ListItem></React.Fragment> }
          <ListItem>&#128214; {markdownRemark.wordCount.words} words, {markdownRemark.timeToRead} { markdownRemark.timeToRead == 1 ? "minute" : "minutes" } to read</ListItem>

                { markdownRemark.frontmatter.tags == null
                  ? ""
                  : <React.Fragment><ListItem>&#127991;&nbsp;
                  { markdownRemark.frontmatter.tags.map(
                    (
                      tag: string,
                      index: any
                    ) => {
                      return (
                        <ItemWithComma
                          description={tag}
                          index={index}
                          url={"/blog/tag/" + slugify(tag, { lower: true })}
                          length={markdownRemark.frontmatter.tags.length - 1}
                          linkType="internal"
                        />
                      )
                    }
                  )} </ListItem></React.Fragment>
                }


        </List>
        <hr width="80%" style={{marginTop: "15px", marginBottom: "15px", border: "1px dashed #808080"}} />
        <div
          style={{ marginTop: "10px", marginRight: "20%" }}
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
`
