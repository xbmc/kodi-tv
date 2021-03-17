import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby";
import { DefaultLayout } from "src/components/Layout";
import { AboutDisclaimer, AboutGallery } from "src/components/SectionsForAbout";

function DynamicSection(props) {
  let sections = {
    aboutdisclaimer: <AboutDisclaimer />,
    aboutgallery: <AboutGallery />,
  };
  let section = sections[props.section];
  if (section == undefined) {
    section = "";
  }
  return section;
}

export default function Page({ data, pageContext, location }) {
  const { onePage } = data; // data.page holds the page data
  let content = onePage.rawMarkdownBody.split("x-section-x");
  return (
    <DefaultLayout frontmatter={onePage.frontmatter}>
      {content.map((section: string, index: any) => {
        return section.trim().split(" ").length > 1 ? (
          <ReactMarkdown className="pb-6 prose prose-blue max-w-none">
            {section}
          </ReactMarkdown>
        ) : (
          <DynamicSection section={section.trim().toLowerCase()} />
        );
      })}
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    onePage: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        breadcrumbs
      }
      rawMarkdownBody
    }
  }
`;
