import React from "react";
import { graphql } from "gatsby";
import { DefaultLayout } from "../../components/Layout";
import { FeaturedCard } from "../../components/Card";
import { UserCircleOutline } from "heroicons-react";

export default function Page({ data, pageContext, location }) {
  let frontmatter = { title: "Recent Donors", breadcrumbs: "Donors | Wall" };
  return (
    <>
      <DefaultLayout frontmatter={frontmatter}>
        Here are some of our recent donors. Thanks for your support!
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.Donors.edges.map((donor, index) => (
            <FeaturedCard
              title={
                donor.node.publicName == "" ? "Anonymous" : donor.node.publicName
              }
              icon={
                <UserCircleOutline className="flex-shrink-0 h-6 w-6 text-white" />
              }
            >
              {(donor.node.currency == "usd" ||
              donor.node.currency == "cad" ||
              donor.node.currency == "aud"
                ? "$"
                : "") +
                (donor.node.currency == "eur" ? "€" : "") +
                (donor.node.currency == "gbp" ? "£" : "") +
                (donor.node.currency == "jpy" ? "¥" : "") +
                donor.node.amount.toString() +
                " " +
                donor.node.currency.toUpperCase()}
            </FeaturedCard>
          ))}
        </div>
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
