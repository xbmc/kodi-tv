import React from "react";
import { graphql } from "gatsby";
import { AddonPageSubMenu } from "../../../components/AddonPageSubMenu";
import ListTopAuthors from "../../../components/ListTopAuthors";
import { DefaultLayout } from "../../../components/Layout";

export default function Page({ data, pageContext, location }) {
  let frontmatter = {
    title: "Top Nexus Add-On Authors",
    breadcrumbs: "Top Authors | Nexus | Addons",
  };
  let linkroot = "/addons/nexus/";

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
    allAuthor: allNexusAuthor(
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
