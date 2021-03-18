import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function GetFrontMatter(props) {
  let frontmatter = {};
  if (props.frontmatter !== undefined) {
    frontmatter = props.frontmatter;
  }
  return frontmatter;
}

function DefaultLayout(props) {
  let frontmatter = GetFrontMatter(props);
  return (
    <>
      <div className="bg-gray-200 h-full">
        <Header frontmatter={frontmatter} />
        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 min-h-screen">
              {props.children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

function LandingPage(props) {
  let frontmatter = GetFrontMatter(props);
  return (
    <>
      <div className="bg-white h-full">
        <Header frontmatter={frontmatter} compact={true} />
        <main>
          <div className="py-0">{props.children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export { DefaultLayout, LandingPage };
