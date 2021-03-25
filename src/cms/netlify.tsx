import CMS from "netlify-cms-app";
import React from "react";
import BlogPost from "../components/BlogPost";
import Page from "../components/Page";
import { SponsorLevelList } from "../components/SponsorList";
import { IconList } from "../components/IconList";

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

const SponsorPreview = ({ entry, widgetsFor, getAsset }) => {
  let sponsors = [];
  let sponsor = {};
  sponsor.node = {};
  sponsor.node.name = entry.getIn(["data", "name"]);
  sponsor.node.slug = entry.getIn(["data", "slug"]);
  sponsor.node.sponsor_level = entry.getIn(["data", "sponsor_level"]);
  sponsor.node.body = entry.getIn(["data", "body"]);
  let rawImage = widgetsFor("image");
  let imgSrc = rawImage.getIn(["data", "src"]);
  sponsor.node.image = {};
  sponsor.node.image.title = rawImage.getIn(["data", "title"]);
  sponsor.node.image.alt = rawImage.getIn(["data", "alt"]);
  sponsor.node.image.src = getAsset(imgSrc).toString();
  sponsors.push(sponsor);

  return (
    <SponsorLevelList
      title={sponsor.node.sponsor_level + " Sponsor"}
      sponsors={sponsors}
    />
  );
};

const StoreItemPreview = ({ entry, getAsset }) => {
  let items = [];
  let item = {};
  item.name = entry.getIn(["data", "name"]);
  item.slug = entry.getIn(["data", "slug"]);
  let rawImage = entry.getIn(["data", "icon"]);
  item.icon = getAsset(rawImage).toString();
  items.push(item);

  return <IconList items={items} iconwidth="256" iconheight="256" />;
};

CMS.registerPreviewStyle("/admin/global.css");
CMS.registerPreviewTemplate("blog", ArticlePreview);
CMS.registerPreviewTemplate("aboutpages", PagePreview);
CMS.registerPreviewTemplate("addonpages", PagePreview);
CMS.registerPreviewTemplate("contribpages", PagePreview);
CMS.registerPreviewTemplate("donatepages", PagePreview);
CMS.registerPreviewTemplate("downloadpages", PagePreview);
CMS.registerPreviewTemplate("helppages", PagePreview);
CMS.registerPreviewTemplate("sponsors", SponsorPreview);
CMS.registerPreviewTemplate("store", StoreItemPreview);
