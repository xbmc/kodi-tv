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
          {data.Donors.nodes.map((donor, index) => (
            <FeaturedCard
              title={donor.publicName == "" ? "Anonymous" : donor.publicName}
              icon={
                <UserCircleOutline className="flex-shrink-0 h-6 w-6 text-gray-50" />
              }
            >
              {(donor.currency == "usd" ||
              donor.currency == "cad" ||
              donor.currency == "aud"
                ? "$"
                : "") +
                (donor.currency == "eur" ? "€" : "") +
                (donor.currency == "gbp" ? "£" : "") +
                (donor.currency == "jpy" ? "¥" : "") +
                donor.amount.toString() +
                " " +
                donor.currency.toUpperCase()}
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
      nodes {
        amount
        currency
        publicName
      }
    }
  }
`;
