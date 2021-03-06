const slugify = require("slugify")

import React from "react"
import { Link } from "gatsby"
import {
  Flex,
  FlexItem,
  List,
  ListItem,
  ListVariant,
  Text,
  TextVariants,
  TextContent,
} from "@patternfly/react-core"
import Pager from "../components/Pager";
import ItemWithComma from "src/components/ItemWithComma"

export default function BlogIndexLayout(props: {
  data: any
  pageContext: any
}) {
  let tagroot = '/blog/tag/'

  return (
      <Flex flexWrap={{default: 'wrapReverse', sm: 'nowrap'}}>
        <FlexItem flex={{default: 'flexDefault', sm: 'flex_3'}}>
          {props.data.allMarkdownRemark.edges.map((item, index) => (
            <React.Fragment>
              { item.node.frontmatter.featured_image == undefined 
                ? ("")
                : (<div style={{ overflow: "hidden" }}><img alt={item.node.frontmatter.featured_image.alt} title={item.node.frontmatter.featured_image.title} src={item.node.frontmatter.featured_image.src} style={{width: "100%", height: "auto"}} /></div>)
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
                { item.node.frontmatter.tags == null
                  ? ""
                  : <React.Fragment><ListItem>&#127991;&nbsp;
                  { item.node.frontmatter.tags.map(
                    (
                      tag: string,
                      index: any
                    ) => {
                      return (
                        <ItemWithComma
                          description={tag}
                          index={index}
                          url={tagroot + slugify(tag, { lower: true })}
                          length={item.node.frontmatter.tags.length - 1}
                          linkType="internal"
                        />
                      )
                    }
                  )} </ListItem></React.Fragment>
                }
              </List>
              <hr style={{marginTop: "15px", marginBottom: "15px", border: "1px dashed #808080"}} />
              <div style={{ marginTop: "10px", marginBottom: "100px" }}>
                <TextContent>
                  <Text>{item.node.excerpt}</Text>
                </TextContent>
                <Link to={item.node.fields.slug}>Read More</Link>
              </div>
            </React.Fragment>
          ))}
          { props.pageContext == undefined 
            ? ("")
            : (<Pager pageContext={props.pageContext} />)
          } 
        </FlexItem>
        <FlexItem flex={{default: 'flexDefault', sm: 'flex_1'}} alignSelf={{ default: 'alignSelfFlexStart' }}>
          <TextContent>
            <Text component={TextVariants.h3}>Tags</Text>
          </TextContent>
          <TextContent>
           { props.data.allTags.distinct.map(
             (
               tag: string,
               index: any
             ) => {
               return (
                 <Text><Link to={tagroot + slugify(tag, { lower: true })}>{tag}</Link></Text>
               )
              }
            )}
          </TextContent>
          <p />&nbsp;
        </FlexItem>
      </Flex>
  )
}
