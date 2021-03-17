import React from "react";
import { IconList } from "src/components/IconList";
import { DefaultLayout } from "src/components/Layout";

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
    <DefaultLayout frontmatter={frontmatter}>
      <p>
        <div className="font-bold text-2xl">{author.name}</div>
        <p>
          {author.name} has {author.totaladdons} add-ons.
        </p>
      </p>
      <IconList items={author.addons} linkroot="../../" />
    </DefaultLayout>
  );
}
