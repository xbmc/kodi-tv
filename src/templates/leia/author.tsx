import React from "react";
import { graphql } from "gatsby";
import AddonAuthorLayout from "../../components/AddonAuthorLayout";

export default function DisplayAddonAuthor({ data }) {
  return <AddonAuthorLayout repo="Leia" data={data} />;
}

export const query = graphql`
  query ($slug: String!) {
    author: leiaAuthor(slug: { eq: $slug }) {
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
