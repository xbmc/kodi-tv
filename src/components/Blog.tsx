import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ItemWithComma from "./ItemWithComma";
import {
  UsersOutline,
  DownloadOutline,
  FolderDownloadOutline,
  CodeOutline,
  FlagOutline,
  SearchOutline,
  NewspaperOutline,
} from "heroicons-react";

const slugify = require("slugify");

function BlogPostCard(props) {
  let post = props.post;
  let tagroot = "/blog/tag/";
  let showimage = true;
  if (post.frontmatter.tags == undefined) {
    post.frontmatter.tags = [];
  }
  if (post.frontmatter.featured_image == undefined) {
    post.frontmatter.featured_image = {
      title: "",
      src: "/images/blog/default.png",
      alt: "",
    };
    showimage = false;
  }
  if (post.frontmatter.author == undefined) {
    post.frontmatter.author = "";
  }
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            title={post.frontmatter.featured_image.title}
            src={post.frontmatter.featured_image.src}
            alt={post.frontmatter.featured_image.alt}
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-kodi">
              {post.frontmatter.tags.map((tag: string, index: any) => {
                return (
                  <ItemWithComma
                    key={index}
                    description={tag}
                    index={index}
                    url={tagroot + slugify(tag, { lower: true })}
                    length={post.frontmatter.tags.length - 1}
                    linkType="internal"
                  />
                );
              })}
              &nbsp;
            </p>
            <a href={post.fields.slug} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post.frontmatter.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {post.frontmatter.author}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <span>{post.frontmatter.date}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{post.timeToRead} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EmptyCard() {
  return (
    <>
      <div className="flex flex-col rounded-lg overflow-hidden">
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">&nbsp;</div>
        </div>
      </div>
    </>
  );
}

function NavCard(props) {
  const data = useStaticQuery(graphql`
    query TagCountQuery {
      postCount: allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog" } } }
      ) {
        totalCount
      }
      prereleaseCount: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { tags: { in: "Prerelease" } }
        }
      ) {
        totalCount
      }
      releaseCount: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { tags: { in: "Release" } }
        }
      ) {
        totalCount
      }
      communityCount: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { tags: { in: "Community" } }
        }
      ) {
        totalCount
      }
      developerCount: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { tags: { in: "Developer" } }
        }
      ) {
        totalCount
      }
      devConCount: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: { tags: { in: "DevCon" } }
        }
      ) {
        totalCount
      }
      allTags: allMarkdownRemark {
        distinct(field: frontmatter___tags)
      }
    }
  `);
  let tagList = [];
  for (let i = 0; i < data.allTags.distinct.length; i++) {
    let oneTag = {};
    oneTag["name"] == data.allTags.distinct[i];
    oneTag["slug"] =
      "/blog/tag/" + slugify(data.allTags.distinct[i], { lower: true });
    switch (data.allTags.distinct[i]) {
      case "Community":
        oneTag["displayname"] = "Community Updates";
        oneTag["icon"] = (
          <UsersOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
        oneTag["count"] = data.communityCount.totalCount;
        break;
      case "DevCon":
        oneTag["displayname"] = "DevCon";
        oneTag["icon"] = (
          <FlagOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
        oneTag["count"] = data.devConCount.totalCount;
        break;
      case "Developer":
        oneTag["displayname"] = "Developer Updates";
        oneTag["icon"] = (
          <CodeOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
        oneTag["count"] = data.developerCount.totalCount;
        break;
      case "Prerelease":
        oneTag["displayname"] = "Prerelease Announcements";
        oneTag["icon"] = (
          <FolderDownloadOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
        oneTag["count"] = data.prereleaseCount.totalCount;
        break;
      case "Release":
        oneTag["displayname"] = "Release Announcements";
        oneTag["icon"] = (
          <DownloadOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
        );
        oneTag["count"] = data.releaseCount.totalCount;
        break;
    }
    tagList.push(oneTag);
  }
  return (
    <>
      <div className="flex flex-col rounded-lg overflow-hidden">
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <nav className="space-y-1" aria-label="Sidebar">
              <h2 className="text-gray-900 font-bold text-md">Tags</h2>
              <a
                href="/blog"
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <NewspaperOutline className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                <span className="truncate">All News</span>
                <span className="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full">
                  {data.postCount.totalCount}
                </span>
              </a>
              {tagList.map((tag: string, index: any) => {
                return (
                  <>
                    <a
                      key={index}
                      href={tag.slug}
                      className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                    >
                      {tag.icon}
                      <span className="truncate">{tag.displayname}</span>
                      <span className="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full">
                        {tag.count}
                      </span>
                    </a>
                  </>
                );
              })}
            </nav>
            <div className="pt-6">
              <label for="search" class="text-gray-900 font-bold text-md">
                Search
              </label>
              <div class="mt-1 px-3 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="search"
                  id="search"
                  class="focus:ring-kodi focus:border-kodi block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="search doesn't work yet"
                />
                <div class="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
                  <SearchOutline className="h-5 w-5 text-kodi" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { BlogPostCard, NavCard, EmptyCard };
