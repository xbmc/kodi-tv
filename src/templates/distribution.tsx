import React from "react";
import Layout from "src/components/layout";
import ReleasesTabs from "src/components/ReleasesTabs";
import MetadataHeader from "src/components/SiteMetadata";
import { graphql, Link } from "gatsby";

export default function Distribution({ data }) {
  const dist = data.distributionYaml;

  return (
    <Layout>
      <MetadataHeader title={dist.name + " | Download"} />
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <img width="150" height="150" alt="" src={dist.icon} />
        </div>
        <div className="col-span-11">
          <h1>{dist.name}</h1>
          <span>
            If you need extra help, checkout our{" "}
            <a href={dist.howto}>"How To" Guide</a> for {dist.name}.
          </span>
          <ReleasesTabs releases={dist.releases} />
        </div>
      </div>
    </Layout>
  );
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
