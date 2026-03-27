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
      <html lang="en" />
      <title>{breadcrumbs}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={shortcrumbs} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={shortcrumbs} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@KodiTV" />
      <meta name="twitter:site" content="@KodiTV" />
      <script
        data-goatcounter="https://koditv.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />
    </>
  );
}
