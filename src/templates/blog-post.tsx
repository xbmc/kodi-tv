const slugify = require("slugify");

import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby";
import { DefaultLayout } from "../components/Layout";
import ItemWithComma from "../components/ItemWithComma";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { blogPost } = data; // data.blogPost holds your post data
  let tagroot = "/blog/tag/";
  let frontmatter = {
    title: blogPost.frontmatter.title,
    breadcrumbs: "News | " + blogPost.frontmatter.title,
  };
  let showimage = true;
  if (blogPost.frontmatter.featured_image == undefined) {
    blogPost.frontmatter.featured_image = { title: "", src: "", alt: "" };
    showimage = false;
  }
  if (blogPost.frontmatter.tags == undefined) {
    blogPost.frontmatter.tags = [];
  }

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <div
        style={{ display: showimage ? "block" : "none" }}
        className="relative pb-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative shadow-xl rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={blogPost.frontmatter.featured_image.src}
                title={blogPost.frontmatter.featured_image.title}
                alt={blogPost.frontmatter.featured_image.alt}
              />
            </div>
            <div className="relative px-6 py-40"></div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-3xl font-bold">{blogPost.frontmatter.title}</h2>
        <p className="text-md font-medium text-kodi">
          {blogPost.frontmatter.tags.map((tag: string, index: any) => {
            return (
              <ItemWithComma
                key={index}
                description={tag}
                index={index}
                url={tagroot + slugify(tag, { lower: true })}
                length={blogPost.frontmatter.tags.length - 1}
                linkType="internal"
              />
            );
          })}
          &nbsp;
        </p>
      </div>
      <div className="mt-3 flex items-center">
        <div>
          <p className="text-lg font-medium text-gray-900">
            {blogPost.frontmatter.author}
          </p>
          <div className="flex space-x-1 text-lg text-gray-500">
            <span>{blogPost.frontmatter.date}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{blogPost.timeToRead} min read</span>
          </div>
        </div>
      </div>

      <ReactMarkdown className="pt-6 prose prose-blue max-w-none">
        {blogPost.rawMarkdownBody}
      </ReactMarkdown>
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    blogPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
      timeToRead
      wordCount {
        words
      }
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        tags
        featured_image {
          alt
          src
          title
        }
        title
      }
    }
  }
`;
