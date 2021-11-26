import React from "react";
import { graphql } from "gatsby";
import SearchNews from "../../components/SearchNews";
import { DefaultLayout } from "../../components/Layout";
import { TagList } from "../../hooks/TagList";

export default function AddonSearchPage({ data, pageContext, location }) {
  let frontmatter = {
    title: "News Search",
    breadcrumbs: "Search | News",
  };

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <SearchNews
        posts={data.blogPosts.nodes}
        tags={TagList().filter(a => a.insearch)}
      />
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query {
    blogPosts: allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1000
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          author
          date(formatString: "MMMM DD, YYYY")
          featured_image {
            alt
            src
            title
          }
          tags
          title
        }
        rawMarkdownBody
        timeToRead
        excerpt
      }
    }
  }
`;
