import React from "react";

function DefaultLayout(props: {
  preview?: boolean;
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  frontmatter?: any;
}) {
  return <>{props.children}</>;
}

function LandingPage(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  frontmatter?: any;
}) {
  return <>{props.children}</>;
}

export { DefaultLayout, LandingPage };
