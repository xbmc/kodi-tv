import { useStaticQuery, graphql } from "gatsby";

export interface Sponsor {
  name: string;
  slug: string;
  sponsor_level: "Diamond" | "Gold" | "Silver" | "Bronze";
  image: { alt: string; src: string; title: string };
  body: string;
}

export function Sponsors(): Sponsor[] {
  const data = useStaticQuery(graphql`
    query Sponsors {
      allSponsorYaml(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            slug
            sponsor_level
            image {
              alt
              src
              title
            }
            body
          }
        }
      }
    }
  `);
  return data.allSponsorYaml.edges.map((a: { node: Sponsor }) => a.node);
}
