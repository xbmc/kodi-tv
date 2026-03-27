import React from "react";
import { Distribution } from "../components/Distribution";
import { graphql } from "gatsby";
import SEO from "../components/Seo";

export function Head({ data }) {
  return (
    <SEO
      frontmatter={{
        title: "Downloads for " + data.distributionYaml.name,
        breadcrumbs: data.distributionYaml.name + " | Downloads",
      }}
    />
  );
}

export default function DistributionPage({ data }) {
  return <Distribution dist={data.distributionYaml} />;
}

export const query = graphql`
  query ($name: String!) {
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
