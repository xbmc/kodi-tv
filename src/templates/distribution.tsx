import React from "react";
import { Distribution } from "../components/Distribution";
import { graphql } from "gatsby";

export default function DistributionPage({ data }) {
  return <Distribution dist={data.distributionYaml} />;
}

export const query = graphql`
  query($name: String!) {
    distributionYaml(name: { eq: $name }) {
      name
      icon
      howto
      releases {
        name
        title
        description
        downloads {
          name
          url
        }
      }
    }
  }
`;
