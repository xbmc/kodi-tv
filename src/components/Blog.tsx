import React from "react";
import ReactMarkdown from "react-markdown";
import ItemWithComma from "./ItemWithComma";
import type { TagInfo } from "../hooks/TagList";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import type { News } from "../hooks/LatestNews";
import remarkGfm from "remark-gfm";

import slugify from "slugify";
import { formatDate } from "../lib/utils";

function BlogPostCard(props: { post: News }) {
  let post = props.post;
  let tagroot = "/blog/tag/";
  if (post.frontmatter.tags == undefined) {
    post.frontmatter.tags = [];
  }
  if (post.frontmatter.author == undefined) {
    post.frontmatter.author = "";
  }
  return (
    <>
      <div className="flex flex-col rounded-2xl shadow-glass overflow-hidden card-lift border border-gray-100/80">
        <a href={post.fields.slug} className="flex-shrink-0 overflow-hidden">
          {post.frontmatter.featured_image == undefined ? (
            <div className="h-48 w-full bg-kodi-gradient"></div>
          ) : (
            <img
              className="h-48 w-full object-fill bg-gray-100 transition-transform duration-700 ease-out hover:scale-105"
              title={post.frontmatter.featured_image.title}
              src={post.frontmatter.featured_image.src}
              alt={post.frontmatter.featured_image.alt}
              loading="lazy"
              decoding="async"
              width={480}
              height={192}
            />
          )}
        </a>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium">
              {post.frontmatter.tags.map((tag: string, index: any) => {
                return (
                  <ItemWithComma
                    key={index}
                    description={tag}
                    index={index}
                    url={
                      tagroot +
                      slugify(tag, {
                        lower: true,
                        remove: /[^\w\s$*_+~.()'"!\-@]+/g,
                      })
                    }
                    length={post.frontmatter.tags.length - 1}
                    linkType="internal"
                  />
                );
              })}
              &nbsp;
            </p>
            <a href={post.fields.slug} className="block mt-2">
              <ReactMarkdown className="text-xl font-semibold text-gray-900 font-display">
                {post.frontmatter.title}
              </ReactMarkdown>

              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className="mt-3 text-base text-gray-500 leading-relaxed"
              >
                {post.excerpt}
              </ReactMarkdown>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div>
              <p className="text-sm font-medium text-gray-900">
                {post.frontmatter.author}
              </p>
              <div className="flex space-x-1 text-sm text-gray-400">
                <span>{formatDate(post.frontmatter.date)}</span>
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
        <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
          <div className="flex-1">&nbsp;</div>
        </div>
      </div>
    </>
  );
}

function NavCard({ tagList }: { tagList: TagInfo[] }) {
  return (
    <>
      <div className="flex flex-col rounded-lg overflow-hidden">
        <div className="flex-1 bg-gray-50 px-6 pt-4 pb-6 flex flex-col justify-between">
          <div className="flex-1">
            <nav className="space-y-1" aria-label="Sidebar">
              <h2 className="text-gray-900 font-bold text-md">Tags</h2>
              {tagList.map(
                (tag: {
                  slug: string;
                  icon: any;
                  count: string;
                  displayname: string;
                }) => {
                  return (
                    <a
                      key={tag.slug}
                      href={tag.slug}
                      className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                    >
                      <tag.icon className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                      <span className="truncate">{tag.displayname}</span>
                      <span className="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full">
                        {tag.count}
                      </span>
                    </a>
                  );
                },
              )}
              <h2 className="pt-6 text-gray-900 font-bold text-md">Search</h2>
              <a
                href="/blog/search"
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <MagnifyingGlassIcon className="text-kodi group-hover:text-kodi-darker flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                <span className="truncate">Advanced Search</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export { BlogPostCard, NavCard, EmptyCard };
