import React from "react";
import { graphql } from "gatsby";
import AddonAuthorLayout from "../../components/AddonAuthorLayout";
import SEO from "../../components/Seo";

export function Head({ data }) {
  return (
    <SEO
      frontmatter={{
        title: "Omega Author Details",
        breadcrumbs: data.author.name + " | Author | Omega | Addons",
      }}
    />
  );
}

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
