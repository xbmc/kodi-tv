import { Link } from "gatsby";
import React from "react";

function AddonPageSubMenu(props: { linkroot: string }) {
  let linkroot = props.linkroot;
  return (
    <div className="grid grid-cols-3 space-x-6 text-base pb-6 md:space-x-3 md:flex">
      <span className="text-left">
        <Link to={linkroot}>Add-Ons Home</Link>
      </span>
      <span className="hidden md:block" aria-hidden="true">
        &middot;
      </span>
      <span className="text-center">
        <Link to={linkroot + "search"}>Search Add-ons</Link>
      </span>
      <span className="hidden md:block" aria-hidden="true">
        &middot;
      </span>
      <span className="text-right">
        <Link to={linkroot + "top-authors"}>Top Authors</Link>
      </span>
    </div>
  );
}

export { AddonPageSubMenu };
