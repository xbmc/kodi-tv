import React from "react";
import { DefaultLayout } from "./Layout";
import ReleasesTabs from "./ReleasesTabs";

function Distribution(props) {
  const dist = props.dist;
  let preview = false;
  if (props.preview != undefined) {
    preview = props.preview;
  }
  let frontmatter = {
    title: "Downloads for " + dist.name,
    breadcrumbs: "Downloads | " + dist.name,
  };

  return (
    <DefaultLayout frontmatter={frontmatter} preview={preview}>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1">
          <img width="150" height="150" alt="" src={dist.icon} />
        </div>
        <div className="col-span-11">
          <span className="prose prose-blue">
            If you need extra help, checkout our{" "}
            <a href={dist.howto}>"How To" Guide</a> for {dist.name}.
          </span>
          <ReleasesTabs releases={dist.releases} />
        </div>
      </div>
    </DefaultLayout>
  );
}

export { Distribution };
