import React from "react";
import { graphql } from "gatsby";
import { DefaultLayout } from "../../components/Layout";
import DonorList from "../../components/DonorList";

export default function Page({ data, pageContext, location }) {
  let frontmatter = { title: "Recent Donors", breadcrumbs: "Donors | Wall" };
  return (
    <>
      <DefaultLayout frontmatter={frontmatter}>
        Here are some of our recent donors. Thanks for your support!
        <DonorList items={data.Donors.edges} />
      </DefaultLayout>
    </>
  );
}

export const pageQuery = graphql`
  query {
    Donors: allDonor(
      filter: { provider: { ne: "none" } }
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          amount
          currency
          publicName
        }
      }
    }
  }
`;
