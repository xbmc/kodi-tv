const slugify = require("slugify");

import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby";
import { DefaultLayout } from "src/components/layout";
import ItemWithComma from "src/components/ItemWithComma";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  let frontmatter = {
    title: markdownRemark.frontmatter.title,
    breadcrumbs: "News | " + markdownRemark.frontmatter.title,
  };

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <div style={{ margin: "20px" }}>
        {markdownRemark.frontmatter.featured_image == undefined ? (
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
              alt={markdownRemark.frontmatter.featured_image.alt}
              title={markdownRemark.frontmatter.featured_image.title}
              src={markdownRemark.frontmatter.featured_image.src}
            />
          </div>
        )}
        <div className="flex justify-between">
          <div>&#128358; {markdownRemark.frontmatter.date}</div>
          {markdownRemark.frontmatter.author.trim() == "" ? (
            ""
          ) : (
            <React.Fragment>
              <div>&#128100; {markdownRemark.frontmatter.author}</div>
            </React.Fragment>
          )}
          <div>
            &#128214; {markdownRemark.wordCount.words} words,{" "}
            {markdownRemark.timeToRead}{" "}
            {markdownRemark.timeToRead == 1 ? "minute" : "minutes"} to read
          </div>

          {markdownRemark.frontmatter.tags == null ? (
            ""
          ) : (
            <React.Fragment>
              <div>
                &#127991;&nbsp;
                {markdownRemark.frontmatter.tags.map((tag: string, index: any) => {
                  return (
                    <ItemWithComma
                      description={tag}
                      index={index}
                      url={"/blog/tag/" + slugify(tag, { lower: true })}
                      length={markdownRemark.frontmatter.tags.length - 1}
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
          <ReactMarkdown className="prose">{markdownRemark.rawMarkdownBody}</ReactMarkdown>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
