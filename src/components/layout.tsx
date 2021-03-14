import React from "react";
import Header from "./header";

function Layout(props) {
  let divname = "content"
  let classnames = "prose prose-blue max-w-7xl lg:prose-lg 2xl:prose-2xl";
  let frontmatter = {};
  if (props.divname !== undefined) {
    divname = props.divname
  };
  if (props.classnames !== undefined) {
    classnames = props.classnames
  };
  if (props.frontmatter !== undefined) {
    frontmatter = props.frontmatter
  } else if (props.pageContext !== undefined) {
    if (props.pageContext.frontmatter !== undefined) {
      frontmatter = props.pageContext.frontmatter
    };
  };
  return (
    <>
      <div>
        <Header frontmatter={frontmatter} />
        <main>
          <div className={"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"}>
            <div className="px-4 py-6 sm:px-0">
              <div
                name={divname}
                className={classnames}
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
