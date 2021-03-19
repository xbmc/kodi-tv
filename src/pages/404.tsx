import React from "react";
import { DefaultLayout } from "../components/Layout";

export default function Page({ data, pageContext, location }) {
  let frontmatter = { title: "Page Not Found", breadcrumbs: "404" };
  return (
    <>
      <DefaultLayout frontmatter={frontmatter}>
        <h2 className="text-xl font-bold pb-6">Well, that was Unexpected</h2>
        Huh. Nobody saw that coming apparently.
      </DefaultLayout>
    </>
  );
}
