const slugify = require("slugify");

import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby";
import { DefaultLayout } from "src/components/layout";
import ItemWithComma from "src/components/ItemWithComma";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { blogPost } = data; // data.blogPost holds your post data
  let frontmatter = {
    title: blogPost.frontmatter.title,
    breadcrumbs: "News | " + blogPost.frontmatter.title,
  };

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <div style={{ margin: "20px" }}>
        {blogPost.frontmatter.featured_image == undefined ? (
          ""
        ) : (
          <div
            style={{
              objectFit: "cover",
              objectPostion: "center",
              overflow: "hidden",
              maxHeight: "500px",
              width: "80%",
            }}
          >
            <img
              alt={blogPost.frontmatter.featured_image.alt}
              title={blogPost.frontmatter.featured_image.title}
              src={blogPost.frontmatter.featured_image.src}
            />
          </div>
        )}
        <div className="flex justify-between">
          <div>&#128358; {blogPost.frontmatter.date}</div>
          {blogPost.frontmatter.author.trim() == "" ? (
            ""
          ) : (
            <React.Fragment>
              <div>&#128100; {blogPost.frontmatter.author}</div>
            </React.Fragment>
          )}
          <div>
            &#128214; {blogPost.wordCount.words} words,{" "}
            {blogPost.timeToRead}{" "}
            {blogPost.timeToRead == 1 ? "minute" : "minutes"} to read
          </div>

          {blogPost.frontmatter.tags == null ? (
            ""
          ) : (
            <React.Fragment>
              <div>
                &#127991;&nbsp;
                {blogPost.frontmatter.tags.map((tag: string, index: any) => {
                  return (
                    <ItemWithComma
                      description={tag}
                      index={index}
                      url={"/blog/tag/" + slugify(tag, { lower: true })}
                      length={blogPost.frontmatter.tags.length - 1}
                      linkType="internal"
                    />
                  );
                })}{" "}
              </div>
            </React.Fragment>
          )}
        </div>
        <hr
          width="80%"
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            border: "1px dashed #808080",
          }}
        />
        <div
          style={{ marginTop: "10px", marginRight: "20%" }}
          className="pf-c-content"
        >
          <ReactMarkdown className="prose">
            {blogPost.rawMarkdownBody}
          </ReactMarkdown>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    blogPost: markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
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
