import React from "react";
import { IconList } from "./IconList";
import type { Distribution } from "../hooks/DistributionList";

import slugify from "slugify";

function DownloadList(props: { items: Distribution[] }) {
  const items = props.items.map(item => ({
    ...item,
    slug: slugify(item.name, {
      lower: true,
      remove: /[^\w\s$*_+~.()'"\!\-@]+/g,
    }),
  }));

  return (
    <IconList
      items={items}
      linkroot="/download/"
      className="grid grid-cols-2 pt-4 pb-6 gap-4 lg:grid-cols-4"
    />
  );
}

export { DownloadList };
