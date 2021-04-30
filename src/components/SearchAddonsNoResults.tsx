import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

export default function SeachAddonsNoResult(props) {
  let title = "No results found";
  let body =
    "No results match the filter criteria. Remove some of the filters or clear all the filters and try again.";
  if (props.firstrun) {
    title = "Ready to search";
    body = "Select at least one option and click search to see results.";
  }
  return (
    <>
      <div className="flex flex-col">
        <SearchIcon className="flex-shrink-0 h-16 w-16" />
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
}
