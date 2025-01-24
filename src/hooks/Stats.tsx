import { useStaticQuery, graphql } from "gatsby";

export const Stats = () => {
  const { statsYaml } = useStaticQuery(graphql`
    query Stats {
      statsYaml {
        addons
        forumthreads
        gitcommits
      }
    }
  `);
  let stats: {
    key: string;
    title: string;
    value: number | string;
  }[] = [];
  stats.push({
    key: "gitcommits",
    title: "GitHub Commits",
    value: statsYaml.gitcommits,
  });
  stats.push({
    key: "forumthreads",
    title: "Forum Conversations",
    value: statsYaml.forumthreads,
  });
  stats.push({ key: "addons", title: "Official Add-ons", value: statsYaml.addons });
  return stats;
};
