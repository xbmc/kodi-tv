import React from "react";
import { graphql } from "gatsby";
import { IconList } from "src/components/iconlist";
import { DefaultLayout } from "src/components/layout";

export default function AddonIndexPage({ data, pageContext, location }) {
  let frontmatter = { title: "Matrix Add-ons", breadcrumbs: "Add-ons | Matrix" };

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <h1>Featured Add-Ons</h1>
      <IconList items={data.FeaturedAddons.edges} linkroot="/addons/matrix/" />
      <h1>New Additions</h1>
      <IconList items={data.NewAddons.edges} linkroot="/addons/matrix/" />
      <h1>Recently Updated</h1>
      <IconList items={data.UpdatedAddons.edges} linkroot="/addons/matrix/" />
      <h1>Categories</h1>
      <h2>Look and Feel</h2>
      <IconList items={data.LookAndFeel.edges} linkroot="/addons/matrix/category/" />
      <h2>Information Providers</h2>
      <IconList
        items={data.InformationProviders.edges}
        linkroot="/addons/matrix/category/"
      />
      <h2>Games</h2>
      <IconList items={data.Games.edges} linkroot="/addons/matrix/category/" />
      <h2>Others</h2>
      <IconList items={data.Others.edges} linkroot="/addons/matrix/category/" />
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query {
    Games: allMatrixCategory(
      sort: { fields: name, order: ASC }
      filter: { grouping: { eq: "Games" } }
    ) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    InformationProviders: allMatrixCategory(
      sort: { fields: name, order: ASC }
      filter: { grouping: { eq: "Information providers" } }
    ) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    LookAndFeel: allMatrixCategory(
      sort: { fields: name, order: ASC }
      filter: { grouping: { eq: "Look and feel" } }
    ) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    Others: allMatrixCategory(
      sort: { fields: name, order: ASC }
      filter: { grouping: { eq: "Other" } }
    ) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    FeaturedAddons: allMatrixAddon(filter: { featured: { eq: "true" } }) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    NewAddons: allMatrixAddon(
      limit: 5
      filter: { agetype: { eq: "new" } }
      sort: { fields: firstseen, order: DESC }
    ) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
    UpdatedAddons: allMatrixAddon(
      limit: 5
      filter: { agetype: { eq: "existing" } }
      sort: { fields: lastupdate, order: DESC }
    ) {
      edges {
        node {
          name
          slug
          icon
        }
      }
    }
  }
`;
