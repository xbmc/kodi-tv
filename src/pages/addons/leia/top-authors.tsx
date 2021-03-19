import React from "react";
import { graphql } from "gatsby";
import { DefaultLayout } from "../../../components/Layout";
import ListTopAuthors from "../../../components/ListTopAuthors";

export default function Page({ data, pageContext, location }) {
  let frontmatter = {
    title: "Top Leia Add-On Authors",
    breadcrumbs: "Add-ons | Leia | Top Authors",
  };
  return (
    <>
      <DefaultLayout frontmatter={frontmatter}>
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
