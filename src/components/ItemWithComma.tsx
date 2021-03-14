import React from "react";
import { Link } from "gatsby";

export default function ItemWithComma(props: {
  index: any;
  length: any;
  url: string | undefined;
  description: {} | null | undefined;
  linkType: "internal" | "external";
}) {
  if (props.url === undefined) {
    return (
      <React.Fragment>
        {props.description}
        {props.index !== props.length ? ", " : ""}
      </React.Fragment>
    );
  } else {
    if (props.linkType === "internal") {
      return (
        <React.Fragment>
          <Link to={props.url}>{props.description}</Link>
          {props.index !== props.length ? ", " : ""}
        </React.Fragment>
      );
    } else
      return (
        <React.Fragment>
          <a target="_blank" rel="noopener" href={props.url}>
            {props.description}
          </a>
          {props.index !== props.length ? ", " : ""}
        </React.Fragment>
      );
  }
}
