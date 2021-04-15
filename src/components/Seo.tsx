import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
const config = require("/gatsby-site-config");

function SEO({ lang, meta, keywords, frontmatter }) {
  let breadcrumbs = config.siteMetadata.title;
  let description = config.siteMetadata.description;
  let image = "/images/kodi_og_default.webp";
  if (frontmatter.breadcrumbs != undefined) {
    breadcrumbs = breadcrumbs + " | " + frontmatter.breadcrumbs;
  }
  if (frontmatter.description != undefined) {
    description = frontmatter.description;
  }
  if (frontmatter.image != undefined) {
    image = frontmatter.image;
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
          content: breadcrumbs,
        },
        {
          property: "twitter:title",
          content: breadcrumbs,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "twitter:description",
          content: description,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          property: "twitter:image",
          content: image,
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
