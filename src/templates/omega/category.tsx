import React from "react";
import { graphql } from "gatsby";
import AddonCategoryLayout from "../../components/AddonCategoryLayout";

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
