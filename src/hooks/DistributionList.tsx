import { useStaticQuery, graphql } from "gatsby";

export interface Distribution {
  name: string;
  icon: string;
}

export function DistributionList(): Distribution[] {
  const { allDistributionYaml } = useStaticQuery(graphql`
    query {
      allDistributionYaml(sort: { fields: sort_order, order: ASC }) {
        edges {
          node {
            name
            icon
          }
        }
      }
    }
  `);
  return allDistributionYaml.edges.map(
    (item: { node: Distribution }, index: any) => item.node
  );
}
