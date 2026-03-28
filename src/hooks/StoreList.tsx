import { useStaticQuery, graphql } from "gatsby";

export interface Merch {
  name: string;
  icon: string;
  slug: string;
}

export function StoreList(): Merch[] {
  const { allStoreYaml } = useStaticQuery(graphql`
    {
      allStoreYaml(sort: [{ group_number: ASC }, { name: ASC }]) {
        nodes {
          name
          icon
          slug
        }
      }
    }
  `);
  return allStoreYaml.nodes;
}
