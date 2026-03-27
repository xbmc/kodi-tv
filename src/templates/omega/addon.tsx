import React from "react";
import { graphql } from "gatsby";
import AddonLayout from "../../components/AddonLayout";
import SEO from "../../components/Seo";

export function Head({ data }) {
  const addon = data.addon;
  const frontmatter: any = {
    title: "Omega Add-on Details",
    breadcrumbs: addon.name + " | Omega | Addons",
    description: addon.snippet,
  };
  if (addon.screenshots?.[0]?.localpath) {
    frontmatter.image = addon.screenshots[0].localpath;
  }
  return <SEO frontmatter={frontmatter} />;
}

export default function DisplayAddon({ data }) {
  return <AddonLayout repo="Omega" data={data} />;
}

export const query = graphql`
  query ($slug: String!) {
    addon: omegaAddon(slug: { eq: $slug }) {
      addonid
      authors {
        icon
        name
        slug
      }
      banners {
        localpath
      }
      categories {
        icon
        name
        slug
      }
      clearlogos {
        localpath
      }
      description
      disclaimer
      fanarts {
        localpath
        remotepath
      }
      featured
      firstseen(formatString: "MMMM DD, YYYY")
      forum
      icon
      downloads
      lastupdate(formatString: "MMMM DD, YYYY")
      license
      name
      news
      platforms {
        path
        platform
      }
      screenshots {
        localpath
      }
      size
      source
      summary
      snippet
      version
      website
    }
  }
`;
