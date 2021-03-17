import React from "react";
import { Link } from "gatsby";
import Card from "src/components/Card";

export default function categoryIconList(props: { authors: any[] }) {
  let authors = [];
  let width = "100%";
  let marginleft = "0%";
  let marginright = "0%";
  let iconwidth = "150";
  let iconheight = "150";
  let linkroot = "../author/";
  if (props.authors[0].node !== undefined) {
    props.authors.map((author: { node: any }, index: any) =>
      authors.push(author.node)
    );
  } else {
    authors = props.authors;
  }
  if (props.width !== undefined) {
    width = props.width;
  }
  if (props.marginleft !== undefined) {
    marginleft = props.marginleft;
  }
  if (props.marginright !== undefined) {
    marginright = props.marginright;
  }
  if (props.linkroot !== undefined) {
    linkroot = props.linkroot;
  }
  if (props.iconwidth !== undefined) {
    iconwidth = props.iconwidth;
  }
  if (props.iconheight !== undefined) {
    iconheight = props.iconheight;
  }

  return (
    <div
      style={{
        width: width,
        marginLeft: marginleft,
        marginRight: marginright,
        paddingTop: "10px",
      }}
    >
      <div className="grid grid-cols-6 gap-4">
        {authors.map((author, index) => (
          <Card>
            <b>{author.name}</b>
            <p>{author.totaladdons + " addons"}</p>
            <p>
              <Link to={linkroot + author.slug}>See all addons for this author</Link>
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
