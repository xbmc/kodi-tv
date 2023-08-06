import React from "react";
import { Merch } from "../hooks/StoreList";
import { IconList } from "./IconList";
import Button from "./Button";

export default function StoreRow({ data }: { data: Merch[] }) {
  return (
    <>
      <div className="flex flex-col gap-3 mb-8">
        <h2 className="text-2xl font-bold mb-4">Grab some merch</h2>
        <IconList
          className="flex justify-between flex-wrap h-[280px] overflow-hidden"
          items={data}
          iconwidth="256"
          iconheight="256"
        />
        <Button href="/store" buttonType="internal">
          More Merch
        </Button>
      </div>
    </>
  );
}
