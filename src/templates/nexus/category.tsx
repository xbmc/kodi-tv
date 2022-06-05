import React from "react";
import { graphql } from "gatsby";
import AddonCategoryLayout from "../../components/AddonCategoryLayout";

export default function DisplayAddonCategory({ data }) {
  return <AddonCategoryLayout repo="Nexus" data={data} />;
}

export const query = graphql`
  query ($slug: String!) {
    category: nexusCategory(slug: { eq: $slug }) {
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
