import React from "react";
import ReactMarkdown from "react-markdown";
import { FeaturedCard } from "./Card";

function IconListFeatured(props: {
  items: any[];
  className: string | undefined;
  linkroot: string | undefined;
}) {
  let items = [];
  let linkroot = "";
  let className = "my-6 max-w-none mx-auto gap-5 grid md:grid-cols-3 lg:grid-cols-5";
  if (props.items.length == 0) {
    return "";
  }
  if (props.items[0].node !== undefined) {
    props.items.map((item: { node: any }, index: any) => items.push(item.node));
  } else {
    items = props.items;
  }
  if (props.className !== undefined) {
    className = props.className;
  }
  if (props.linkroot !== undefined) {
    linkroot = props.linkroot;
  }
  return (
    <>
      <div className={className}>
        {items.map((item, index) => (
          <FeaturedCard
            iconClass={
              "-mt-12 flex items-center justify-center h-24 w-24 rounded-md border bg-white"
            }
            title={item.name}
            icon={
              <img
                className="rounded-md"
                alt={item.name + " icon"}
                title={item.name + " icon"}
                src={item.icon}
              />
            }
            url={linkroot + item.slug}
          >
            {item.snippet}
          </FeaturedCard>
        ))}
      </div>
    </>
  );
}

function IconList(props: {
  items: any[];
  iconwidth: string | undefined;
  iconheight: string | undefined;
  linkroot: string | undefined;
  className: string | undefined;
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
        <div align="center" key={item.name}>
          {item.slug == undefined ? (
            <>
              <img
                className="rounded-md"
                width={iconwidth}
                height={iconheight}
                alt=""
                src={item.icon}
              />
              <div style={{ display: item.name === "" ? "none" : "block" }}>
                <ReactMarkdown>{item.name}</ReactMarkdown>
              </div>
            </>
          ) : (
            <>
              <a href={linkroot + item.slug}>
                <img
                  className="rounded-md"
                  width={iconwidth}
                  height={iconheight}
                  alt=""
                  src={item.icon}
                />
                <div style={{ display: item.name === "" ? "none" : "block" }}>
                  <ReactMarkdown>{item.name}</ReactMarkdown>
                </div>
              </a>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export { IconList, IconListFeatured };
