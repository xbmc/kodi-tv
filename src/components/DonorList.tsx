import React from "react";
import { Card } from "src/components/Card";

export default function DonorList(props: {
  items: any[];
  width: string | undefined;
  marginleft: string | undefined;
  marginright: string | undefined;
}) {
  let items = [];
  let width = "100%";
  let marginleft = "0%";
  let marginright = "0%";
  if (props.items.length == 0) {
    return "";
  }
  if (props.items[0].node !== undefined) {
    props.items.map((item: { node: any }, index: any) => items.push(item.node));
  } else {
    items = props.items;
  }
  if (props.width !== undefined) {
    width = props.width;
  }
  if (props.marginleft !== undefined) {
    marginleft = props.marginleft;
  }
  if (props.marginright !== undefined) {
    marginright = props.marginright;
  }

  return (
    <div
      style={{
        width: width,
        marginLeft: marginleft,
        marginRight: marginright,
        paddingTop: "10px",
      }}
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
        {items.map((item, index) => (
          <Card>
            <b>{item.publicName == "" ? "Anonymous" : item.publicName}</b>
            <p>
              {item.currency == "usd" ||
              item.currency == "cad" ||
              item.currency == "aud"
                ? "$"
                : ""}
              {item.currency == "eur" ? "€" : ""}
              {item.currency == "gbp" ? "£" : ""}
              {item.currency == "jpy" ? "¥" : ""}
              {item.amount} {item.currency.toUpperCase()}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
