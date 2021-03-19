import React from "react";
import { Search } from "heroicons-react";

export default function SeachAddonsNoResult(props) {
  let title = "No results found";
  let body =
    "No results match the filter criteria. Remove all filters or clear all filters to show results.";
  if (props.firstrun) {
    title = "Ready to search";
    body = "Select at least one option and click search to see results.";
  }
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <Search />
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </React.Fragment>
  );
}
