import React from "react";
import { graphql } from "gatsby";
import AddonCategoryLayout from "../../components/AddonCategoryLayout";

export default function DisplayAddon({ data }) {
  return <AddonCategoryLayout data={data} />;
}

export const query = graphql`
  query($slug: String!) {
    category: matrixCategory(slug: { eq: $slug }) {
      name
      totaladdons
      addons {
        name
        slug
        icon
      }
    }
  }
`;
