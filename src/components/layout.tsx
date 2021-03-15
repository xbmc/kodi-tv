import React from "react";
import Header from "./header";

function Layout(props) {
  let className = "prose prose-blue max-w-7xl lg:prose-lg 2xl:prose-2xl";
  let frontmatter = {};
  if (props.className !== undefined) {
    className = props.className;
  }
  if (props.frontmatter !== undefined) {
    frontmatter = props.frontmatter;
  } else if (props.pageContext !== undefined) {
    if (props.pageContext.frontmatter !== undefined) {
      frontmatter = props.pageContext.frontmatter;
    }
  }
  return (
    <>

<div class="bg-gray-200 h-full">
  <Header frontmatter={frontmatter} />
  <main className="-mt-32">
    <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 min-h-screen">
        <div className={className}>{props.children}</div>
      </div>
    </div>
  </main>
</div>

    </>
  );
}

export default Layout;
