import React from "react";
import { graphql } from "gatsby";
import AddonCategoryLayout from "../../components/AddonCategoryLayout";
import SEO from "../../components/Seo";

export function Head({ data }) {
  return (
    <SEO
      frontmatter={{
        title: "Omega Add-on Category List",
        breadcrumbs: data.category.name + " | Category | Omega | Addons",
      }}
    />
  );
}

export default function DisplayAddonCategory({ data }) {
  return <AddonCategoryLayout repo="Omega" data={data} />;
}

export const query = graphql`
  query ($slug: String!) {
    category: omegaCategory(slug: { eq: $slug }) {
      name
      totaladdons
      addons {
        name
        slug
        icon
        snippet
      }
    }
  }
`;
