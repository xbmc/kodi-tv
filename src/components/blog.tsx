import React from "react";
import ItemWithComma from "src/components/itemwithcomma";

function BlogPostCard(props) {
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            title={props.frontmatter.featured_image.title}
            src={props.frontmatter.featured_image.src}
            alt={props.frontmatter.featured_image.alt}
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-kodi">
              <a href="/blog/tag/releases" className="hover:underline">
                Still Have to do Tags
              </a>
            </p>
            <a href={props.url} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{props.frontmatter.title}</p>
              <p className="mt-3 text-base text-gray-500">{props.excerpt}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {props.frontmatter.author}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <span>{props.frontmatter.date}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{props.timeToRead} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { BlogPostCard };
