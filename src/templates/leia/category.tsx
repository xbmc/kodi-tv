import React from "react"
import { graphql } from "gatsby"
import AddonCategoryLayout from "src/components/AddonCategoryLayout"

export default function DisplayAddon({ data }) {
  return (<AddonCategoryLayout data={data} />)
}


export const query = graphql`
  query($slug: String!) {
    category: leiaCategory(slug: { eq: $slug }) {
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
