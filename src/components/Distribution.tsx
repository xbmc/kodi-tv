import React from "react";
import { DefaultLayout } from "./Layout";
import ReleasesTabs from "./ReleasesTabs";
import { AdUnit } from "./AdUnit";

function Distribution(props) {
  const dist = props.dist;
  let preview = false;
  if (props.preview != undefined) {
    preview = props.preview;
  }
  let frontmatter = {
    title: "Downloads for " + dist.name,
    breadcrumbs: dist.name + " | Downloads",
  };

  return (
    <DefaultLayout frontmatter={frontmatter} preview={preview}>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-2">
          <img
            width="150"
            height="150"
            alt={dist.name + " logo"}
            src={dist.icon}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="col-span-1 md:col-span-7">
          <span className="prose prose-blue">
            If you need extra help, checkout our{" "}
            <a href={dist.howto}>"How To" Guide</a> for {dist.name}.
          </span>
          <ReleasesTabs platform={dist.name} releases={dist.releases} />
        </div>
        <aside className="col-span-1 md:col-span-3">
          <AdUnit minHeightClass="min-h-72" className="md:sticky md:top-6" />
        </aside>
      </div>
      <div className="mt-8">
        <AdUnit minHeightClass="min-h-28" />
      </div>
    </DefaultLayout>
  );
}

export { Distribution };
