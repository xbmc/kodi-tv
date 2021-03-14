import React from "react";
import IconList from "./IconList";
import Layout from "./layout";
import MetadataHeader from "./SiteMetadata";

export default function AddonAuthorLayout({
  data,
}: {
  data: { author: { totaladdons: string; name: string; addons: string[] } };
}) {
  const author = data.author;

  return (
    <Layout>
      <MetadataHeader title={author.name + " | Author | Add-On"} />
      <p>
        <h1>{author.name}</h1>
        <p>
          {author.name} has {author.totaladdons} add-ons.
        </p>
      </p>
      <IconList items={author.addons} linkroot="../../" />
    </Layout>
  );
}
