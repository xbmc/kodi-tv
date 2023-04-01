import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SeachAddonsNoResult(props: { firstrun: any }) {
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
        <MagnifyingGlassIcon className="flex-shrink-0 h-16 w-16 self-center" />
        <h2 className="text-2xl font-bold self-center">{title}</h2>
        <p className="self-center">{body}</p>
      </div>
    </>
  );
}
