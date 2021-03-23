import React from "react";
import { Search } from "heroicons-react";

export default function SeachNewsNoResult(props) {
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
        <Search />
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
}
