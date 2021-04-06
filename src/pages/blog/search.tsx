import React from "react";
import { graphql } from "gatsby";
import SearchNews from "../../components/SearchNews";
import { DefaultLayout } from "../../components/Layout";
import { TagList } from "../../hooks/TagList";

export default function AddonSearchPage({ data, pageContext, location }) {
  let frontmatter = {
    title: "News Search",
    breadcrumbs: "News | Search",
  };
  let tags = [];
  let tagList = TagList();
  for (let i = 0; i < tagList.length; i++) {
    if (tagList[i].insearch) {
      tags.push(tagList[i].name);
    }
  }

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <SearchNews posts={data.blogPosts.edges} tags={tags} />
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
      edges {
        node {
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
  }
`;
