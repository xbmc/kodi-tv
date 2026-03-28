import React from "react";

export default function ItemWithComma(props: {
  index: any;
  length: any;
  url: string | undefined;
  description: React.ReactNode;
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
          <a href={props.url}>{props.description}</a>
          {props.index !== props.length ? ", " : ""}
        </React.Fragment>
      );
    } else
      return (
        <React.Fragment>
          <a target="_blank" rel="noreferrer" href={props.url}>
            {props.description}
          </a>
          {props.index !== props.length ? ", " : ""}
        </React.Fragment>
      );
  }
}
