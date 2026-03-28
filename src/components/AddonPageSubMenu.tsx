import React from "react";

function AddonPageSubMenu(props: { linkroot: string }) {
  let linkroot = props.linkroot;
  return (
    <div className="grid grid-cols-3 space-x-6 text-base pb-6 md:space-x-3 md:flex">
      <span className="text-left">
        <a href={linkroot}>Add-Ons Home</a>
      </span>
      <span className="hidden md:block" aria-hidden="true">
        &middot;
      </span>
      <span className="text-center">
        <a href={linkroot + "search"}>Search Add-ons</a>
      </span>
      <span className="hidden md:block" aria-hidden="true">
        &middot;
      </span>
      <span className="text-right">
        <a href={linkroot + "top-authors"}>Top Authors</a>
      </span>
    </div>
  );
}

export { AddonPageSubMenu };
