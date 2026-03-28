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

import slugify from "slugify";

export interface TagInfo {
  name: string;
  displayname: string;
  slug: string;
  icon: any;
  count: number;
  insearch: boolean;
}

export function buildTagList(
  posts: { frontmatter: { tags: string[] | null } }[],
): TagInfo[] {
  let tags = [...new Set(posts.flatMap(p => p.frontmatter.tags ?? []))].sort(
    (a, b) => a.localeCompare(b),
  );
  let tagList: TagInfo[] = [
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
  let oneTag: TagInfo;
  let lateTagList: TagInfo[] = [];
  for (let i = 0; i < tags.length; i++) {
    oneTag = {
      name: tags[i],
      displayname: tags[i],
      slug:
        "/blog/tag/" +
        slugify(tags[i], { lower: true, remove: /[^\w\s$*_+~.()'"!\-@]+/g }),
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
}
