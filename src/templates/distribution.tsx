import React from "react";
import { DefaultLayout } from "src/components/layout";
import ReleasesTabs from "src/components/ReleasesTabs";
import { graphql, Link } from "gatsby";

export default function Distribution({ data }) {
  const dist = data.distributionYaml;
  let frontmatter = {
    title: "Downloads for " + dist.name,
    breadcrumbs: "Downloads | " + dist.name,
  };

  return (
    <DefaultLayout className="distribution" frontmatter={frontmatter}>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1">
          <img width="150" height="150" alt="" src={dist.icon} />
        </div>
        <div className="col-span-11">
          <span className="prose prose-blue">
            If you need extra help, checkout our{" "}
            <a href={dist.howto}>"How To" Guide</a> for {dist.name}.
          </span>
          <ReleasesTabs releases={dist.releases} />
        </div>
      </div>
    </DefaultLayout>
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
