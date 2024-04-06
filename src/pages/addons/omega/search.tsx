import React from "react";
import { graphql } from "gatsby";
import SearchAddons from "../../../components/SearchAddons";
import { AddonPageSubMenu } from "../../../components/AddonPageSubMenu";
import { DefaultLayout } from "../../../components/Layout";

export default function AddonSearchPage({ data, pageContext, location }) {
  let frontmatter = {
    title: "Omega Add-on Search",
    breadcrumbs: "Search | Omega | Addons",
  };
  let linkroot = "/addons/omega/";

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
  {
    allAddon: allOmegaAddon(sort: { name: ASC }) {
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
    allCategory: allOmegaCategory(sort: { name: ASC }) {
      nodes {
        name
      }
    }
  }
`;
