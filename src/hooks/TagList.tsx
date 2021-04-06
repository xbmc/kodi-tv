import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  CodeOutline,
  DownloadOutline,
  FlagOutline,
  FolderDownloadOutline,
  NewspaperOutline,
  PresentationChartBarOutline,
  TagOutline,
  TicketOutline,
  UsersOutline,
} from "heroicons-react";

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
        distinct(field: frontmatter___tags)
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
      icon: (
        <NewspaperOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
      ),
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
      icon: (
        <TagOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
      ),
      count: taggedPosts.filter(a => a.frontmatter.tags.includes(tags[i])).length,
      insearch: true,
    };
    switch (tags[i]) {
      case "Community":
        oneTag.displayname = "Community Updates";
        oneTag.icon = (
          <UsersOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
        break;
      case "Conferences":
        oneTag["icon"] = (
          <TicketOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
        break;
      case "DevCon":
        oneTag["icon"] = (
          <FlagOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
        break;
      case "Deep Dives":
        oneTag["icon"] = (
          <PresentationChartBarOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
        break;
      case "Developer":
        oneTag["displayname"] = "Developer Updates";
        oneTag["icon"] = (
          <CodeOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
        break;
      case "Prerelease":
        oneTag["displayname"] = "Prerelease Announcements";
        oneTag["icon"] = (
          <FolderDownloadOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
        break;
      case "Release":
        oneTag["displayname"] = "Release Announcements";
        oneTag["icon"] = (
          <DownloadOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
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
