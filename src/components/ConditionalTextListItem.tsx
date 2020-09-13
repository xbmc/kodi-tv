import React from "react"
import { TextListItem } from "@patternfly/react-core"
import { Link } from "gatsby"

export default function ConditionalTextListItem(props: {
  hide: any
  url: string | undefined
  title: {} | null | undefined
  description: {} | null | undefined
}) {
  if (props.hide) {
    return null
  }
  if (props.url === undefined) {
    return (
      <React.Fragment>
        <TextListItem component="dt">{props.title}</TextListItem>
        <TextListItem component="dd">{props.description}</TextListItem>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <TextListItem component="dt">{props.title}</TextListItem>
        <TextListItem component="dd">
          <Link to={props.url}>{props.description}</Link>
        </TextListItem>
      </React.Fragment>
    )
  }
}
