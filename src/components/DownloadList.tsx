import React from "react";
import { IconList } from "./IconList";
import { DistributionList } from "../hooks/DistributionList";

const slugify = require("slugify");

function DownloadList(props: { items: any[] }) {
  const items = DistributionList();
  items.forEach(function (item, index) {
    this[index]["slug"] = slugify(item.name, { lower: true });
  }, items);

  return (
    <IconList
      items={items}
      linkroot="/download/"
      className="grid grid-cols-2 pt-4 pb-6 gap-4 lg:grid-cols-4"
    />
  );
}

export { DownloadList };
