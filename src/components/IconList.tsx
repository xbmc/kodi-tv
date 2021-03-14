import React from "react";
import { Link } from "gatsby";

export default function categoryIconList(props: {
  items: any[];
  width: string | undefined;
  marginleft: string | undefined;
  marginright: string | undefined;
  iconwidth: string | undefined;
  iconheight: string | undefined;
  linkroot: string | undefined;
}) {
  let items = [];
  let iconwidth = "150";
  let iconheight = "150";
  let linkroot = "";
  let className = "grid grid-cols-2 pt-4 pb-6 gap-4 md:grid-cols-3 lg:grid-cols-5";
  if (props.items.length == 0) {
    return "";
  }
  if (props.items[0].node !== undefined) {
    props.items.map((item: { node: any }, index: any) => items.push(item.node));
  } else {
    items = props.items;
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
  if (props.className !== undefined) {
    className = props.className;
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div align="center">
          <Link to={linkroot + item.slug}>
            <img width={iconwidth} height={iconheight} alt="" src={item.icon} />
            <div dangerouslySetInnerHTML={{ __html: item.name }} />
          </Link>
        </div>
      ))}
    </div>
  );
}
