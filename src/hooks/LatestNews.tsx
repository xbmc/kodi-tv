import { useStaticQuery, graphql } from "gatsby";

export interface News {
  excerpt: string;
  timeToRead: string;
  fields: { slug: string };
  frontmatter: {
    author: string;
    date: string;
    tags: string[];
    featured_image: {
      alt: string;
      src: string;
      title: string;
    };
    title: string;
  };
}

export function LatestNews(): News[] {
  const { blogPosts } = useStaticQuery(graphql`
    query {
      blogPosts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fields: { collection: { eq: "blog" } } }
        limit: 3
      ) {
        edges {
          node {
            excerpt(pruneLength: 300)
            timeToRead
            fields {
              slug
            }
            frontmatter {
              author
              date(formatString: "MMMM DD, YYYY")
              tags
              featured_image {
                alt
                src
                title
              }
              title
            }
          }
        }
      }
    }
  `);
  return blogPosts.edges.map((item: { node: News }, index: any) => item.node);
}
