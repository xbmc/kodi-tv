const slugify = require("slugify");

import React from "react";
import { Link } from "gatsby";
import Pager from "./Pager";
import ItemWithComma from "./ItemWithComma";

export default function BlogIndexLayout(props: { data: any; pageContext: any }) {
  let tagroot = "/blog/tag/";

  return (
    <div className="flex flex-wrap-reverse sm:flex-nowrap">
      <div>
        {props.data.blogPosts.edges.map((item, index) => (
          <React.Fragment>
            {item.node.frontmatter.featured_image == undefined ? (
              ""
            ) : (
              <div
                style={{
                  objectFit: "cover",
                  objectPostion: "center",
                  overflow: "hidden",
                  maxHeight: "500px",
                  width: "100%",
                }}
              >
                <img
                  alt={item.node.frontmatter.featured_image.alt}
                  title={item.node.frontmatter.featured_image.title}
                  src={item.node.frontmatter.featured_image.src}
                />
              </div>
            )}
            <h2>
              <Link to={item.node.fields.slug}>{item.node.frontmatter.title}</Link>
            </h2>
            <div className="flex">
              <div>&#128358; {item.node.frontmatter.date}</div>
              {item.node.frontmatter.author.trim() == "" ? (
                ""
              ) : (
                <React.Fragment>
                  <div>&#128100; {item.node.frontmatter.author}</div>
                </React.Fragment>
              )}
              <div>
                &#128214; {item.node.wordCount.words} words, {item.node.timeToRead}{" "}
                {item.node.timeToRead == 1 ? "minute" : "minutes"} to read
              </div>
              {item.node.frontmatter.tags == null ? (
                ""
              ) : (
                <React.Fragment>
                  <div>
                    &#127991;&nbsp;
                    {item.node.frontmatter.tags.map((tag: string, index: any) => {
                      return (
                        <ItemWithComma
                          description={tag}
                          index={index}
                          url={tagroot + slugify(tag, { lower: true })}
                          length={item.node.frontmatter.tags.length - 1}
                          linkType="internal"
                        />
                      );
                    })}{" "}
                  </div>
                </React.Fragment>
              )}
            </div>
            <hr
              style={{
                marginTop: "15px",
                marginBottom: "15px",
                border: "1px dashed #808080",
              }}
            />
            <div style={{ marginTop: "10px", marginBottom: "100px" }}>
              <p>{item.node.excerpt}</p>
              <Link to={item.node.fields.slug}>Read More</Link>
            </div>
          </React.Fragment>
        ))}
        {props.pageContext == undefined ? (
          ""
        ) : (
          <Pager pageContext={props.pageContext} />
        )}
      </div>
      <div className="flex flex-col px-4">
        <h4>Tags</h4>
        {props.data.allTags.distinct.map((tag: string, index: any) => {
          return <Link to={tagroot + slugify(tag, { lower: true })}>{tag}</Link>;
        })}
        <p />
        &nbsp;
      </div>
    </div>
  );
}
