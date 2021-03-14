import React from "react";
import Header from "./header";

function Layout(props) {
  let frontmatter = {};
  if (props.pageContext === undefined) {
    frontmatter["title"] = "";
  } else {
    if (props.pageContext.frontmatter === undefined) {
      frontmatter["title"] = "";
    } else {
      frontmatter = props.pageContext.frontmatter;
    }
  }
  return (
    <>
      <div>
        <Header frontmatter={frontmatter} />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div
                name="content"
                className="prose prose-blue max-w-7xl lg:prose-lg 2xl:prose-2xl"
              >
                {props.children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Layout;
