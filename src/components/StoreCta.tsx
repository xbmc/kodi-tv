import React from "react";
import StoreRow from "./StoreRow";

function StoreCta(props: { items: any[] }) {
  return <StoreRow data={props.items} />;
}

export { StoreCta };
