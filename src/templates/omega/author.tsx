import React from "react";
import { graphql } from "gatsby";
import AddonAuthorLayout from "../../components/AddonAuthorLayout";

export default function DisplayAddonAuthor({ data }) {
  return <AddonAuthorLayout repo="Omega" data={data} />;
}

export const query = graphql`
  query ($slug: String!) {
    author: omegaAuthor(slug: { eq: $slug }) {
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
