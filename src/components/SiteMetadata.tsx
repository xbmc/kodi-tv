import React from "react"
import Helmet from "react-helmet"
import config from "../../gatsby-site-config"

export default function MetadataHeader( props ) {
  let title = config.siteMetadata.title
  if (props.title !== undefined) {
    title = props.title + ' | ' + title
  } 

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}
