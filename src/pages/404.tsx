import React from "react";
import { DefaultLayout } from "../components/Layout";

export default function Page({ data, pageContext, location }) {
  let frontmatter = { title: "Page Not Found", breadcrumbs: "404" };
  return (
    <>
      <DefaultLayout frontmatter={frontmatter}>
        <div className="prose prose-blue max-w-none">
          <h2>Well, that was Unexpected</h2>
          Huh. Nobody saw that coming apparently.
          <br />
          <h3>OK, Maybe Somewhat Expected</h3>
          We have recently updated the web site, and some URLs are no longer valid.
          Specifically:
          <ul>
            <li>
              URLs for a single add-on have changed. To find the add-on again, please
              use the Add-ons menu to get to the add-on again.
            </li>
            <li>
              If you saved a custom add-on search (like to get a list of all add-ons
              by an author), those won't work anymore. For add-on authors, there are
              now static pages for every author. You can find the URL by going to one
              of the author's add-ons and then selecting the author name.
            </li>
            <li>
              The tags for the blog posts have changed, so any URL for a blog tag no
              longer works. If you go to the News section you will see links to the
              new tags.
            </li>
          </ul>
        </div>
      </DefaultLayout>
    </>
  );
}
