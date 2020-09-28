import React from "react"
import { Text, TextVariants, TextContent } from "@patternfly/react-core"
import { graphql } from "gatsby"
import IconList from "../components/IconList"
import Layout from "../gatsby-theme-patternfly/components/Layout"

export default function Category({
  data,
}: {
  data: { author: { totaladdons: string; name: string; addons: string[] } }
}) {
  const author = data.author

  return (
    <Layout>
      <TextContent>
        <Text component={TextVariants.h1}>{author.name}</Text>
        <Text>
          {author.name} has {author.totaladdons}{" "}add-ons.
        </Text>
      </TextContent>
      <IconList items={author.addons} linkroot="/addons/" />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    author(slug: { eq: $slug }) {
      name
      totaladdons
      addons {
        name
        slug
        icon
      }
    }
  }
`
