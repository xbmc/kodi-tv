import CMS from "netlify-cms-app";
import React from "react";
import BlogPost from "../components/BlogPost";
import Page from "../components/Page";
import { SponsorLevelList } from "../components/SponsorList";
import { IconList } from "../components/IconList";
import { Distribution } from "../components/Distribution";
import { Sponsor } from "../hooks/Sponsors";

const config = require("../../gatsby-site-config");
CMS.init(config.cms);

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

const DistributionPreview = ({ entry, widgetsFor, getAsset }) => {
  // have to convert the entry object to JSON to get to nested list of downloads
  // this is a known issue with Netlify CMS
  // see https://github.com/netlify/netlify-cms/issues/3485
  let rawDist = entry.getIn(["data"]).toJS();
  let rawDistStr = JSON.stringify(rawDist, null, 2);
  let dist = {};
  dist.name = entry.getIn(["data", "name"]);
  let imgSrc = entry.getIn(["data", "icon"]);
  dist.icon = getAsset(rawDist.icon).toString();
  dist.howto = entry.getIn(["data", "howto"]);
  if (rawDist.releases == undefined) {
    rawDist.releases = [];
  }
  dist.releases = [];
  rawDist.releases.map(function (release, index) {
    let item = {};
    item.name = release.name;
    item.title = release.title;
    item.description = release.description;
    if (release.downloads == undefined) {
      release.downloads = [];
    }
    let downloads = [];
    release.downloads.map(function (download, index) {
      let dlitem = {};
      dlitem.name = download.name;
      dlitem.url = download.url;
      downloads.push(dlitem);
    });
    if (downloads.length > 0) {
      item.downloads = downloads;
    } else {
      item.downloads = null;
    }
    dist.releases.push(item);
  });
  return <Distribution dist={dist} preview={true} />;
};

const SponsorPreview = ({ entry, widgetsFor, getAsset }) => {
  let sponsors = [];
  let rawImage = widgetsFor("image");
  let imgSrc = rawImage.getIn(["data", "src"]);
  let sponsor: Sponsor = {
    name: entry.getIn(["data", "name"]),
    slug: entry.getIn(["data", "slug"]),
    sponsor_level: entry.getIn(["data", "sponsor_level"]),
    body: entry.getIn(["data", "body"]),
    image: {
      title: rawImage.getIn(["data", "title"]),
      alt: rawImage.getIn(["data", "alt"]),
      src: getAsset(imgSrc).toString(),
    },
  };
  sponsors.push(sponsor);

  return (
    <SponsorLevelList
      title={sponsor.sponsor_level + " Sponsor"}
      sponsors={sponsors}
    />
  );
};

const StoreItemPreview = ({ entry, getAsset }) => {
  let items = [
    {
      name: entry.getIn(["data", "name"]),
      slug: entry.getIn(["data", "slug"]),
      icon: getAsset(entry.getIn(["data", "icon"])).toString(),
    },
  ];

  return <IconList items={items} iconwidth="256" iconheight="256" />;
};

CMS.registerPreviewStyle("/admin/global.css");
CMS.registerPreviewTemplate("blog", ArticlePreview);
CMS.registerPreviewTemplate("aboutpages", PagePreview);
CMS.registerPreviewTemplate("addonpages", PagePreview);
CMS.registerPreviewTemplate("contribpages", PagePreview);
CMS.registerPreviewTemplate("donatepages", PagePreview);
CMS.registerPreviewTemplate("downloadpages", PagePreview);
CMS.registerPreviewTemplate("distribution", DistributionPreview);
CMS.registerPreviewTemplate("sponsors", SponsorPreview);
CMS.registerPreviewTemplate("store", StoreItemPreview);
