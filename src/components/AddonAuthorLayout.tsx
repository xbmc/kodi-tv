import React from "react";
import { IconListFeatured } from "./IconList";
import { DefaultLayout } from "./Layout";
import { AddonPageSubMenu } from "./AddonPageSubMenu";

export default function AddonAuthorLayout({
  repo,
  data,
}: {
  repo: string;
  data: { author: { totaladdons: string; name: string; addons: string[] } };
}) {
  const author = data.author;
  let linkroot = "/addons/" + repo.toLowerCase() + "/";
  let frontmatter = {
    title: repo + " Author Details",
    breadcrumbs: "Addons | " + repo + " | Author | " + author.name,
  };

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <AddonPageSubMenu linkroot={linkroot} />
      <div className="font-bold text-2xl">{author.name}</div>
      <div>
        {author.name} has {author.totaladdons} add-ons.
      </div>
      <IconListFeatured items={author.addons} linkroot={linkroot} />
    </DefaultLayout>
  );
}
