import React from "react";
import { DefaultLayout } from "./layout";
import IconList from "./IconList";
import MetadataHeader from "./SiteMetadata";

export default function AddonCategoryLayout({ repo, data }) {
  const category = data.category;
  let frontmatter = {
    title: repo + " Add-on Category List",
    breadcrumbs: "Addons | " + repo + " | Category | " + category.name,
  };

  return (
    <DefaultLayout className="addoncategorydetail" frontmatter={frontmatter}>
      <p>
        <div className="font-bold text-2xl">{category.name}</div>
        <p>This category has {category.totaladdons} addons in it.</p>
      </p>
      <IconList items={category.addons} linkroot="../../" />
    </DefaultLayout>
  );
}
