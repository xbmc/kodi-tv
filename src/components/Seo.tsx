import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
const config = require("/gatsby-site-config");

function SEO({ lang, meta, keywords, frontmatter }) {
  let breadcrumbs = config.siteMetadata.title;
  let shortcrumbs = breadcrumbs;
  let description = config.siteMetadata.description;
  let image = config.siteMetadata.siteUrl + "/images/kodi_og_default.webp";
  if (frontmatter.breadcrumbs != undefined) {
    breadcrumbs = breadcrumbs + " | " + frontmatter.breadcrumbs;
    shortcrumbs = frontmatter.breadcrumbs;
  }
  if (frontmatter.description != undefined) {
    description = frontmatter.description;
  }
  if (frontmatter.image != undefined) {
    image = config.siteMetadata.siteUrl + frontmatter.image;
  }
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={breadcrumbs}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: shortcrumbs,
        },
        {
          name: "twitter:title",
          content: shortcrumbs,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          name: "twitter:image",
          content: image,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: "@KodiTV",
        },
        {
          name: "twitter:site",
          content: "@KodiTV",
        },
        {
          property: "og:type",
          content: "website",
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : []
        )
        .concat(meta)}
    ></Helmet>
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  frontmatter: PropTypes.object.isRequired,
};

export default SEO;
