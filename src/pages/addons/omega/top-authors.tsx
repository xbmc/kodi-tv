import React from "react";
import { graphql } from "gatsby";
import { AddonPageSubMenu } from "../../../components/AddonPageSubMenu";
import ListTopAuthors from "../../../components/ListTopAuthors";
import { DefaultLayout } from "../../../components/Layout";
import SEO from "../../../components/Seo";

export function Head() {
  return (
    <SEO
      frontmatter={{
        title: "Top Omega Add-On Authors",
        breadcrumbs: "Top Authors | Omega | Addons",
      }}
    />
  );
}

export default function Page({ data, pageContext, location }) {
  let frontmatter = {
    title: "Top Omega Add-On Authors",
    breadcrumbs: "Top Authors | Omega | Addons",
  };
  let linkroot = "/addons/omega/";

  return (
    <>
      <DefaultLayout frontmatter={frontmatter}>
        <AddonPageSubMenu linkroot={linkroot} />
        <ListTopAuthors linkroot={linkroot} authors={data.allAuthor.nodes} />
      </DefaultLayout>
    </>
  );
}

export const pageQuery = graphql`
  {
    allAuthor: allOmegaAuthor(
      limit: 20
      sort: [{ totaladdons: DESC }, { name: ASC }]
    ) {
      nodes {
        name
        slug
        icon
        totaladdons
      }
    }
  }
`;
