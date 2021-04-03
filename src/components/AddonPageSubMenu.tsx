import { Link } from "gatsby";
import React from "react";

function AddonPageSubMenu(props: { linkroot: string }) {
  let linkroot = props.linkroot;
  return (
    <div className="flex space-x-1 text-base pb-6 prose prose-blue">
      <span>
        <Link className="hover:text-kodi" to={linkroot}>
          Add-Ons Home
        </Link>
      </span>
      <span aria-hidden="true">&middot;</span>
      <span>
        <Link className="hover:text-kodi" to={linkroot + "search"}>
          Search Add-ons
        </Link>
      </span>
      <span aria-hidden="true">&middot;</span>
      <span>
        <Link className=" hover:text-kodi" to={linkroot + "top-authors"}>
          Top Authors
        </Link>
      </span>
    </div>
  );
}

export { AddonPageSubMenu };
