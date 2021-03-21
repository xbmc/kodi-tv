import React from "react";
import ReactMarkdown from "react-markdown";

function FeaturedCard(props) {
  let item = props.item;
  let linkroot = "";
  if (props.linkroot != undefined) {
    linkroot = props.linkroot;
  }
  return (
    <>
      <a className="mt-12 flex flex-col bg-gray-100" href={linkroot + item.slug}>
        <div className="flex-shrink-0 pl-6">
          <img className="-mt-12 h-32 w-32 border bg-white" src={item.icon} alt="" />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <ReactMarkdown className="text-base font-semibold text-gray-900">
              {item.name}
            </ReactMarkdown>
            <ReactMarkdown className="mt-3 text-sm text-gray-600">
              {item.snippet}
            </ReactMarkdown>
          </div>
        </div>
      </a>
    </>
  );
}

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
          <FeaturedCard item={item} linkroot={linkroot} />
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
        <>
          <div align="center">
            {item.slug == undefined ? (
              <>
                <img width={iconwidth} height={iconheight} alt="" src={item.icon} />
                <div style={{ display: item.name === "" ? "none" : "block" }}>
                  <ReactMarkdown>{item.name}</ReactMarkdown>
                </div>
              </>
            ) : (
              <>
                <a
                  className="text-base text-gray-500 hover:text-kodi-darker"
                  href={linkroot + item.slug}
                >
                  <img
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
        </>
      ))}
    </div>
  );
}

export { IconList, IconListFeatured };
