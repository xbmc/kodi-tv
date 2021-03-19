import React from "react";
import { graphql } from "gatsby";
import { AddonPageSubMenu } from "../../../components/AddonPageSubMenu";
import ListTopAuthors from "../../../components/ListTopAuthors";
import { DefaultLayout } from "../../../components/Layout";

export default function Page({ data, pageContext, location }) {
  let frontmatter = {
    title: "Top Leia Add-On Authors",
    breadcrumbs: "Add-ons | Leia | Top Authors",
  };
  let linkroot = "/addons/leia/"
  
  return (
    <>
      <DefaultLayout frontmatter={frontmatter}>
        <AddonPageSubMenu linkroot={linkroot} />
        <ListTopAuthors authors={data.allAuthor.edges} />
      </DefaultLayout>
    </>
  );
}

export const pageQuery = graphql`
  query {
    allAuthor: allLeiaAuthor(
      limit: 28
      sort: { fields: [totaladdons, name], order: [DESC, ASC] }
    ) {
      edges {
        node {
          name
          slug
          icon
          totaladdons
        }
      }
    }
  }
`;
