import React from "react";
import ReactMarkdown from "react-markdown";

function IconList(props: {
  items: any[];
  iconwidth: string | undefined;
  iconheight: string | undefined;
  linkroot: string | undefined;
}) {
  if (props.items.length == 0) {
    return "";
  }
  let items = [];
  let linkroot = "";
  let className = "grid grid-cols-2 pt-4 pb-6 gap-4 md:grid-cols-3 lg:grid-cols-5";
  let iconwidth = "150";
  let iconheight = "150";
  if (props.className !== undefined) {
    className = props.className;
  }
  if (props.iconwidth !== undefined) {
    iconwidth = props.iconwidth;
  }
  if (props.iconheight !== undefined) {
    iconheight = props.iconheight;
  }
  if (props.items[0].node !== undefined) {
    props.items.map((item: { node: any }, index: any) => items.push(item.node));
  } else {
    items = props.items;
  }
  if (props.linkroot !== undefined) {
    linkroot = props.linkroot;
  }
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div align="center">
          <a
            className="text-base text-gray-500 hover:text-kodi-darker"
            to={linkroot + item.slug}
          >
            <img width={iconwidth} height={iconheight} alt="" src={item.icon} />
            <div style={{ display: item.name === "" ? "none" : "block" }}>
              <ReactMarkdown>{item.name}</ReactMarkdown>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export { IconList };
