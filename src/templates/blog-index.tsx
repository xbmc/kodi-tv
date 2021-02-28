import React from "react"
import {
  List,
  ListItem,
  ListVariant,
  Text,
  TextVariants,
  TextContent,
} from "@patternfly/react-core"
import {
  graphql,
  Link,
} from "gatsby"
import Layout from "../gatsby-theme-patternfly/components/Layout"
import Pager from "../components/Pager";
import MetadataHeader from "src/components/SiteMetadata"

export default function BlogIndexPage( { data, pageContext, location } ) {  
  return (
    <Layout>
      <MetadataHeader title="News" />
      <div style={{ margin: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <TextContent>
            <Text component={TextVariants.h1}>News</Text>
          </TextContent>
        </div>
        <div style={{ marginLeft: "40px", marginRight: "40px" }}>
          {data.allMarkdownRemark.edges.map((item, index) => (
            <React.Fragment>
              { item.node.frontmatter.featured_image == undefined 
                ? ("")
                : (<img alt={item.node.frontmatter.featured_image.alt} title={item.node.frontmatter.featured_image.title} src={item.node.frontmatter.featured_image.src} style={{maxWidth: "100%", maxHeight: "400px", height: "auto"}} />)
              }
              <TextContent>
                <Text component={TextVariants.h2}>{item.node.frontmatter.title}</Text>
              </TextContent>
              <div style={{ marginTop: "-5px" }}>
                <List variant={ListVariant.inline}>
                  <ListItem>{item.node.frontmatter.date}</ListItem>
                  <ListItem>&bull;</ListItem>
                  { item.node.frontmatter.author.trim() == ""
                    ? ""
                    : <React.Fragment><ListItem>{item.node.frontmatter.author}</ListItem><ListItem>&bull;</ListItem></React.Fragment> }
                  <ListItem>{item.node.wordCount.words} words</ListItem>
                  <ListItem>&bull;</ListItem>
                  <ListItem>{item.node.timeToRead} { item.node.timeToRead == 1 ? "minute" : "minutes" } to read</ListItem>
                </List>
              </div>
              <div style={{ marginTop: "10px", marginBottom: "30px" }}>
                <TextContent>
                  <Text>{item.node.excerpt}</Text>
                </TextContent>
                <Link to={item.node.fields.slug}>Read More</Link>
              </div>
            </React.Fragment>
          ))}
          <Pager pageContext={pageContext} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      skip: $skip,
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
`
