import React from "react";
import { DefaultLayout } from "./Layout";
import { IconList } from "./IconList";
import { AddonPageSubMenu } from "./AddonPageSubMenu";

export default function AddonCategoryLayout({ repo, data }) {
  const category = data.category;
  let frontmatter = {
    title: repo + " Add-on Category List",
    breadcrumbs: "Addons | " + repo + " | Category | " + category.name,
  };

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <AddonPageSubMenu linkroot={"/addons/" + repo.toLowerCase() + "/"} />
      <h2 className="font-bold text-2xl">{category.name}</h2>
      <p>This category has {category.totaladdons} addons in it.</p>
      <IconList items={category.addons} linkroot="../../" />
    </DefaultLayout>
  );
}
