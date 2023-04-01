import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  CodeBracketIcon,
  ArrowDownTrayIcon,
  FlagIcon,
  FolderArrowDownIcon,
  NewspaperIcon,
  PresentationChartBarIcon,
  TagIcon,
  TicketIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const slugify = require("slugify");

export const TagList = () => {
  const { allPosts, allTags } = useStaticQuery(graphql`
    query TagListQuery {
      allPosts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog" } } }
      ) {
        nodes {
          frontmatter {
            tags
          }
        }
      }
      allTags: allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog" } } }
      ) {
        distinct(field: { frontmatter: { tags: SELECT } })
      }
    }
  `);

  let tags = allTags.distinct;
  let posts = allPosts.nodes;
  let tagList = [
    {
      name: "All News",
      displayname: "All News",
      slug: "/blog",
      icon: NewspaperIcon,
      count: posts.length,
      insearch: false,
    },
  ];
  let taggedPosts = posts.filter(a => a.frontmatter.tags !== null);
  let oneTag = {};
  let lateTagList = [];
  for (let i = 0; i < tags.length; i++) {
    oneTag = {
      name: tags[i],
      displayname: tags[i],
      slug: "/blog/tag/" + slugify(tags[i], { lower: true }),
      icon: TagIcon,
      count: taggedPosts.filter(a => a.frontmatter.tags.includes(tags[i])).length,
      insearch: true,
    };
    switch (tags[i]) {
      case "Community":
        oneTag.displayname = "Community Updates";
        oneTag.icon = UsersIcon;
        break;
      case "Conferences":
        oneTag.icon = TicketIcon;
        break;
      case "DevCon":
        oneTag.icon = FlagIcon;
        break;
      case "Deep Dives":
        oneTag.icon = PresentationChartBarIcon;
        break;
      case "Developer":
        oneTag.displayname = "Developer Updates";
        oneTag.icon = CodeBracketIcon;
        break;
      case "Prerelease":
        oneTag.displayname = "Prerelease Announcements";
        oneTag.icon = FolderArrowDownIcon;
        break;
      case "Release":
        oneTag.displayname = "Release Announcements";
        oneTag.icon = ArrowDownTrayIcon;
        break;
    }
    if (oneTag.name == "April Fools") {
      lateTagList.push(oneTag);
    } else {
      tagList.push(oneTag);
    }
  }
  return tagList.concat(lateTagList);
};
