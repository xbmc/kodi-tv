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
import Layout from "../../gatsby-theme-patternfly/components/Layout"

export default function BlogIndexPage( props ) {
  return (
    <Layout>
      <div style={{ marginBottom: "10px" }}>
        <TextContent>
          <Text component={TextVariants.h1}>News</Text>
        </TextContent>
      </div>
      <div style={{ width: "80%", marginLeft: "40px", marginRight: "40px" }}>
        {props.data.allMarkdownRemark.edges.map((item, index) => (
          <React.Fragment>
            { item.node.frontmatter.featured_image.trim() == ""
              ? ""
              : <img alt="" src={item.node.frontmatter.featured_image} /> }
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
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
            featured_image
            title
          }
        }
      }
    }
  }
`
