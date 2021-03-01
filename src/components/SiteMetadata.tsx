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
      <link rel="icon" type="image/png" href="/images/icon.png"/>
      <title>{title}</title>
    </Helmet>
  )
}
