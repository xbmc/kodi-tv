import React from "react";
import { DefaultLayout } from "src/components/Layout";

function MDXLayout(props: { pageContext: any }) {
  return (
    <>
      <DefaultLayout frontmatter={props.pageContext.frontmatter}>
        <div className="prose prose-blue max-w-7xl lg:prose-lg 2xl:prose-2xl">
          {props.children}
        </div>
      </DefaultLayout>
    </>
  );
}

export default MDXLayout;
