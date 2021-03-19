import { useStaticQuery, graphql } from "gatsby";

export const DistributionList = () => {
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
  let nodes = [];
  allDistributionYaml.edges.map((item: { node: any }, index: any) =>
    nodes.push(item.node)
  );
  return nodes;
};
