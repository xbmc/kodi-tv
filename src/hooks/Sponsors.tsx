import { useStaticQuery, graphql } from "gatsby";

export interface Sponsor {
  name: string;
  slug: string;
  image: { alt: string; src: string; title: string };
  body: string;
}

export function Sponsors(): Sponsor[] {
  const data = useStaticQuery(graphql`
    query Sponsors {
      allSponsorYaml(sort: { name: ASC }) {
        nodes {
          name
          slug
          image {
            alt
            src
            title
          }
          body
        }
      }
    }
  `);
  return data.allSponsorYaml.nodes;
}
