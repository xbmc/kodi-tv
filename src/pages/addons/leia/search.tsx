import React from "react";
import { graphql } from "gatsby";
import SearchAddons from "../../../components/SearchAddons";
import { AddonPageSubMenu } from "../../../components/AddonPageSubMenu";
import { DefaultLayout } from "../../../components/Layout";

export default function AddonSearchPage({ data, pageContext, location }) {
  let frontmatter = {
    title: "Leia Add-on Search",
    breadcrumbs: "Add-ons | Leia | Search",
  };
  let linkroot = "/addons/leia/";

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <AddonPageSubMenu linkroot={linkroot} />
      <SearchAddons
        addons={data.allAddon.nodes}
        categories={data.allCategory.nodes}
        linkroot={linkroot}
      />
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query {
    allAddon: allLeiaAddon(sort: { fields: name, order: ASC }) {
      nodes {
        addonid
        name
        icon
        slug
        downloads
        lastupdate
        description
        summary
        snippet
        categories {
          name
        }
        authors {
          name
        }
      }
    }
    allCategory: allLeiaCategory(sort: { fields: name, order: ASC }) {
      nodes {
        name
      }
    }
  }
`;
