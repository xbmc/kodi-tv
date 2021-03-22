import { useStaticQuery, graphql } from "gatsby";

export const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query Sponsors {
      diamondSponsors: allSponsorYaml(
        filter: { sponsor_level: { eq: "Diamond" } }
        sort: { fields: name, order: ASC }
      ) {
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
      goldSponsors: allSponsorYaml(
        filter: { sponsor_level: { eq: "Gold" } }
        sort: { fields: name, order: ASC }
      ) {
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
      silverSponsors: allSponsorYaml(
        filter: { sponsor_level: { eq: "Silver" } }
        sort: { fields: name, order: ASC }
      ) {
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
      bronzeSponsors: allSponsorYaml(
        filter: { sponsor_level: { eq: "Bronze" } }
        sort: { fields: name, order: ASC }
      ) {
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
  return data;
};
