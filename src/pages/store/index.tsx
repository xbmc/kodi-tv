import React from "react";
import { graphql } from "gatsby";
import Button from "../../components/Button";
import { IconList } from "../../components/IconList";
import { DefaultLayout } from "../../components/Layout";

export default function Page({ data, pageContext, location }) {
  let frontmatter = { title: "Kodi Merchandise Store", breadcrumbs: "Store" };
  return (
    <>
      <DefaultLayout frontmatter={frontmatter}>
        <h2 className="text-2xl font-bold">The only place for official Kodi gear</h2>
        <IconList items={data.allStoreYaml.nodes} iconwidth="256" iconheight="256" />
        <h2 className="text-2xl font-bold">Consider Donating</h2>
        <p className="pb-6">
          We are always happy to receive a donation by which you show your support
          and appreciation. All donations go towards the Kodi foundation and are
          typically used for travel to attend conferences, any necessary paperwork
          and legal fees, purchase necessary hardware and licenses for developers and
          hopefully the yearly Kodi Foundation Developers Conference.
        </p>
        <Button href="/donate" buttonType="internal">
          Donate to Kodi
        </Button>
      </DefaultLayout>
    </>
  );
}

export const pageQuery = graphql`
  {
    allStoreYaml(sort: [{ group_number: ASC }, { name: ASC }]) {
      nodes {
        name
        icon
        slug
      }
    }
  }
`;
