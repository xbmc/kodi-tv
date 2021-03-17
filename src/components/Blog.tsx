import React from "react";
import ItemWithComma from "src/components/ItemWithComma";

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

export { BlogPostCard };
