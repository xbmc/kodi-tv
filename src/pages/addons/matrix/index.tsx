import React from "react";
import { graphql } from "gatsby";
import { IconList, IconListFeatured } from "../../../components/IconList";
import { DefaultLayout } from "../../../components/Layout";
import { AddonPageSubMenu } from "../../../components/AddonPageSubMenu";

export default function AddonIndexPage({ data, pageContext, location }) {
  let frontmatter = { title: "Matrix Add-ons", breadcrumbs: "Add-ons | Matrix" };
  let linkroot = "/addons/matrix/";

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <AddonPageSubMenu linkroot={linkroot} />
      <h2 className="text-2xl font-bold">Featured Add-Ons</h2>
      <IconListFeatured items={data.FeaturedAddons.edges} linkroot={linkroot} />
      <h2 className="text-2xl font-bold">New Additions</h2>
      <IconListFeatured items={data.NewAddons.edges} linkroot={linkroot} />
      <h2 className="text-2xl font-bold">Recently Updated</h2>
      <IconListFeatured items={data.UpdatedAddons.edges} linkroot={linkroot} />
      <h2 className="text-2xl font-bold pb-3">Categories</h2>
      <h3 className="text-xl font-bold">Look and Feel</h3>
      <IconList items={data.LookAndFeel.edges} linkroot={linkroot + "category/"} />
      <h3 className="text-xl font-bold">Information Providers</h3>
      <IconList
        items={data.InformationProviders.edges}
        linkroot={linkroot + "category/"}
      />
      <h3 className="text-xl font-bold">Games</h3>
      <IconList items={data.Games.edges} linkroot={linkroot + "category/"} />
      <h3 className="text-xl font-bold">Others</h3>
      <IconList items={data.Others.edges} linkroot={linkroot + "category/"} />
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
    FeaturedAddons: allMatrixAddon(limit: 5, filter: { featured: { eq: "true" } }) {
      edges {
        node {
          name
          slug
          icon
          snippet
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
          snippet
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
          snippet
        }
      }
    }
  }
`;
