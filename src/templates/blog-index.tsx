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
                <Text component={TextVariants.h2}><Link to={item.node.fields.slug}>{item.node.frontmatter.title}</Link></Text>
              </TextContent>
              <List variant={ListVariant.inline}>
                <ListItem>&#128358; {item.node.frontmatter.date}</ListItem>
                { item.node.frontmatter.author.trim() == ""
                  ? ""
                  : <React.Fragment><ListItem>&#128100; {item.node.frontmatter.author}</ListItem></React.Fragment> }
                <ListItem>&#128214; {item.node.wordCount.words} words, {item.node.timeToRead} { item.node.timeToRead == 1 ? "minute" : "minutes" } to read</ListItem>
              </List>
              <hr width="80%" style={{marginTop: "15px", marginBottom: "15px", border: "1px dashed #808080"}} />
              <div style={{ marginTop: "10px", marginBottom: "100px", marginRight: "20%" }}>
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
