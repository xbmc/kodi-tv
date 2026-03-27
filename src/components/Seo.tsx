import React from "react";
const config = require("/gatsby-site-config");

interface SeoProps {
  frontmatter?: {
    breadcrumbs?: string;
    description?: string;
    image?: string;
  };
}

export default function SEO({ frontmatter = {} }: SeoProps) {
  let breadcrumbs = config.siteMetadata.title;
  let shortcrumbs = breadcrumbs;
  let description = config.siteMetadata.description;
  let image = config.siteMetadata.siteUrl + "/images/kodi_og_default.webp";
  if (frontmatter.breadcrumbs != undefined) {
    breadcrumbs = frontmatter.breadcrumbs + " | " + breadcrumbs;
    shortcrumbs = frontmatter.breadcrumbs;
  }
  if (frontmatter.description != undefined) {
    description = frontmatter.description;
  }
  if (frontmatter.image != undefined) {
    image = config.siteMetadata.siteUrl + frontmatter.image;
  }
  return (
    <>
      <html key="html-lang" lang="en" />
      <title key="title">{breadcrumbs}</title>
      <meta key="description" name="description" content={description} />
      <meta key="og:title" property="og:title" content={shortcrumbs} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:image" property="og:image" content={image} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={shortcrumbs} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta key="twitter:image" name="twitter:image" content={image} />
      <meta key="twitter:creator" name="twitter:creator" content="@KodiTV" />
      <meta key="twitter:site" name="twitter:site" content="@KodiTV" />
      <script
        key="goatcounter"
        data-goatcounter="https://koditv.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />
    </>
  );
}
