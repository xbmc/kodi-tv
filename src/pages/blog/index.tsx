import React from "react"
import {
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
      <TextContent>
        <Text component={TextVariants.h1}>News</Text>
      </TextContent>
      {props.data.allMarkdownRemark.edges.map((item, index) => (
        <React.Fragment>
          <TextContent>
            <Text component={TextVariants.h2}>{item.node.frontmatter.title}</Text>
          </TextContent>
          <div style={{ marginTop: "-5px" }}>
            <TextContent>
              <Text>{item.node.frontmatter.date}</Text>
            </TextContent>
          </div>
          <div style={{ marginTop: "10px", marginBottom: "30px" }}>
            <div
              className="pf-c-content"
              dangerouslySetInnerHTML={{ __html: item.node.excerpt }}
            />
            <Link to={item.node.fields.slug}>Read More</Link>
          </div>
        </React.Fragment>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`
