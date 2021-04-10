import React from "react";
import { DefaultLayout } from "./Layout";
import { IconListFeatured } from "./IconList";
import { AddonPageSubMenu } from "./AddonPageSubMenu";

export default function AddonCategoryLayout({ repo, data }) {
  const category = data.category;
  let linkroot = "/addons/" + repo.toLowerCase() + "/";
  let frontmatter = {
    title: repo + " Add-on Category List",
    breadcrumbs: "Addons | " + repo + " | Category | " + category.name,
  };

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <AddonPageSubMenu linkroot={linkroot} />
      <h2 className="font-bold text-2xl">{category.name}</h2>
      <p>This category has {category.totaladdons} addons in it.</p>
      <IconListFeatured items={category.addons} linkroot={linkroot} />
    </DefaultLayout>
  );
}
