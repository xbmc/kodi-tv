import React from "react"
import Helmet from "react-helmet"

export default function MetadataHeader( props ) {
  let title = 'Kodi | Opensource Home Theater Software'
  if (props.title !== undefined) {
    title = props.title + ' | ' + title
  } 

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}
