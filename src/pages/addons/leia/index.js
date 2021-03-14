import React from "react";
import { graphql } from "gatsby"
import IconList from "src/components/IconList"
import Layout from "src/components/layout"

export default function AddonIndexPage ({data, pageContext, location}) {
  let frontmatter = {title: "Leia Add-ons", breadcrumbs: "Add-ons | Leia"}
  let classnames = "addonindex"

  return (
    <Layout classnames={classnames} frontmatter={frontmatter}>
      <h1>Featured Add-Ons</h1>
      <IconList items={data.FeaturedAddons.edges} linkroot='/addons/leia/' />
      <h1>New Additions</h1>
      <IconList items={data.NewAddons.edges} linkroot='/addons/leia/' />
      <h1>Recently Updated</h1>
      <IconList items={data.UpdatedAddons.edges} linkroot='/addons/leia/' />
      <h1>Categories</h1>
      <h2>Look and Feel</h2>
      <IconList items={data.LookAndFeel.edges} linkroot='/addons/leia/category/' />
      <h2>Information Providers</h2>
      <IconList items={data.InformationProviders.edges} linkroot='/addons/leia/category/' />
      <h2>Games</h2>
      <IconList items={data.Games.edges} linkroot='/addons/leia/category/' />
      <h2>Others</h2>
      <IconList items={data.Others.edges} linkroot='/addons/leia/category/' />  
    </Layout>    
  )
}

export const pageQuery = graphql`
  query {
    Games: allLeiaCategory(sort: {fields: name, order: ASC}, filter: {grouping: {eq: "Games"}}) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    InformationProviders: allLeiaCategory(sort: {fields: name, order: ASC}, filter: {grouping: {eq: "Information providers"}}) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    LookAndFeel: allLeiaCategory(sort: {fields: name, order: ASC}, filter: {grouping: {eq: "Look and feel"}}) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    Others: allLeiaCategory(sort: {fields: name, order: ASC}, filter: {grouping: {eq: "Other"}}) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    FeaturedAddons: allLeiaAddon(filter: {featured: {eq: "true"}}) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    NewAddons: allLeiaAddon(limit: 5, filter: {agetype: {eq: "new"}}, sort: {fields: firstseen, order: DESC}) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    UpdatedAddons: allLeiaAddon(limit: 5, filter: {agetype: {eq: "existing"}}, sort: {fields: lastupdate, order: DESC}) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
  }
`