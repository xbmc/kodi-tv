import React from "react";
import IconList from "./IconList";
import Layout from "./layout";

export default function AddonAuthorLayout({
  repo,
  data,
}: {
  repo: string;
  data: { author: { totaladdons: string; name: string; addons: string[] } };
}) {
  const author = data.author;
  let frontmatter = {
    title: repo + " Author Details",
    breadcrumbs: "Addons | " + repo + " | Author | " + author.name,
  };

  return (
    <Layout className="addonauthordetails" frontmatter={frontmatter}>
      <p>
        <div className="font-bold text-2xl">{author.name}</div>
        <p>
          {author.name} has {author.totaladdons} add-ons.
        </p>
      </p>
      <IconList items={author.addons} linkroot="../../" />
    </Layout>
  );
}
