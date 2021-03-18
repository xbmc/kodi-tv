import React from "react";
import { IconList } from "./IconList";

const slugify = require("slugify");

export default function DownloadList(props: { items: any[] }) {
  let items = [];
  if (props.items[0].node !== undefined) {
    props.items.map((item: { node: any }, index: any) => items.push(item.node));
  } else {
    items = props.items;
  }
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
