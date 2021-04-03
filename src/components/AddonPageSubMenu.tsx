import React from "react";

function AddonPageSubMenu(props) {
  let linkroot = props.linkroot;
  return (
    <div className="flex space-x-1 text-base pb-6 prose prose-blue">
      <span>
        <a className="hover:text-kodi" href={linkroot}>
          Add-Ons Home
        </a>
      </span>
      <span aria-hidden="true">&middot;</span>
      <span>
        <a className="hover:text-kodi" href={linkroot + "search"}>
          Search Add-ons
        </a>
      </span>
      <span aria-hidden="true">&middot;</span>
      <span>
        <a className=" hover:text-kodi" href={linkroot + "top-authors"}>
          Top Authors
        </a>
      </span>
    </div>
  );
}

export { AddonPageSubMenu };
