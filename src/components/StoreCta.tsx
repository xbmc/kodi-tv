import React from "react";
import { StoreList } from "../hooks/StoreList";
import StoreRow from "./StoreRow";

function StoreCta(props: { items?: any[] }) {
  const items = StoreList();

  return <StoreRow data={items} />;
}

export { StoreCta };
