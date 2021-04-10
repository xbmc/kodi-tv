import React from "react";
import { graphql } from "gatsby";
import { AddonPageSubMenu } from "../../../components/AddonPageSubMenu";
import ListTopAuthors from "../../../components/ListTopAuthors";
import { DefaultLayout } from "../../../components/Layout";

export default function Page({ data, pageContext, location }) {
  let frontmatter = {
    title: "Top Matrix Add-On Authors",
    breadcrumbs: "Add-ons | Matrix | Top Authors",
  };
  let linkroot = "/addons/matrix/";

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
  query {
    allAuthor: allMatrixAuthor(
      limit: 20
      sort: { fields: [totaladdons, name], order: [DESC, ASC] }
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
