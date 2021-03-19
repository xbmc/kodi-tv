import React from "react";
import { graphql } from "gatsby";
import SearchAddons from "../../../components/SearchAddons";
import { DefaultLayout } from "../../../components/Layout";

export default function AddonSearchPage({ data, pageContext, location }) {
  let frontmatter = {
    title: "Matrix Add-on Search",
    breadcrumbs: "Add-ons | Matrix | Search",
  };

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <SearchAddons
        addons={data.allAddon.nodes}
        categories={data.allCategory.edges}
      />
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query {
    allAddon: allMatrixAddon(sort: { fields: name, order: ASC }) {
      nodes {
        addonid
        name
        icon
        slug
        downloads
        lastupdate
        description
        summary
        categories {
          name
        }
        authors {
          name
        }
      }
    }
    allCategory: allMatrixCategory(sort: { fields: name, order: ASC }) {
      edges {
        node {
          name
        }
      }
    }
  }
`;
