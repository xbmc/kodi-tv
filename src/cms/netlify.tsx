import CMS from "netlify-cms-app";
import React from "react";
import BlogPost from "../components/BlogPost";
import Page from "../components/Page";

const ArticlePreview = ({ entry, widgetsFor, getAsset }) => {
  let post = {};
  post.rawMarkdownBody = entry.getIn(["data", "body"]);
  post.timeToRead = 99;
  post.frontmatter = {};
  post.frontmatter.title = entry.getIn(["data", "title"]);
  post.frontmatter.author = entry.getIn(["data", "author"]);
  post.frontmatter.date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(entry.getIn(["data", "date"]));
  let featuredImage = widgetsFor("featured_image");
  let imgSrc = featuredImage.getIn(["data", "src"], null);
  if (imgSrc != null) {
    post.frontmatter.featured_image = {};
    post.frontmatter.featured_image.title = featuredImage.getIn(["data", "title"]);
    post.frontmatter.featured_image.alt = featuredImage.getIn(["data", "alt"]);
    post.frontmatter.featured_image.src = getAsset(imgSrc).toString();
  }
  let tags = entry.getIn(["data", "tags"], []);
  post.frontmatter.tags = [];
  tags.map(function (tag, index) {
    post.frontmatter.tags.push(tag);
  });

  return <BlogPost blogPost={post} preview={true} />;
};

const PagePreview = ({ entry, widgetsFor, getAsset }) => {
  let page = {};
  page.rawMarkdownBody = entry.getIn(["data", "body"]);
  page.frontmatter = {};
  page.frontmatter.title = entry.getIn(["data", "title"]);
  page.frontmatter.breadcrumbs = entry.getIn(["data", "breadcrumbs", null]);

  return <Page onePage={page} preview={true} />;
};

CMS.registerPreviewStyle("/admin/global.css");
CMS.registerPreviewTemplate("blog", ArticlePreview);
CMS.registerPreviewTemplate("aboutpages", PagePreview);
CMS.registerPreviewTemplate("addonpages", PagePreview);
CMS.registerPreviewTemplate("contribpages", PagePreview);
CMS.registerPreviewTemplate("donatepages", PagePreview);
CMS.registerPreviewTemplate("downloadpages", PagePreview);
CMS.registerPreviewTemplate("helppages", PagePreview);
