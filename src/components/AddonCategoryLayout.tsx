import React from "react";
import Layout from "./layout";
import IconList from "./IconList";
import MetadataHeader from "./SiteMetadata";

export default function AddonCategoryLayout({ data }) {
  const category = data.category;

  return (
    <Layout>
      <MetadataHeader title={category.name + " | Category | Add-On"} />
      <p>
        <h1>{category.name}</h1>
        <p>This category has {category.totaladdons} addons in it.</p>
      </p>
      <IconList items={category.addons} linkroot="../../" />
    </Layout>
  );
}
