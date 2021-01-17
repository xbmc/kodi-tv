import React from "react"
import {
  Gallery,
  GalleryItem,
  Card,
  CardTitle,
  CardBody
} from "@patternfly/react-core"

export default function DonorList(props: {
  items: any[]
  width: string | undefined
  marginleft: string | undefined
  marginright: string | undefined
}) {
  let items = []
  let width = "100%"
  let marginleft = "0%"
  let marginright = "0%"
  if (props.items[0].node !== undefined) {
    props.items.map((item: { node: any }, index: any) => items.push(item.node))
  } else {
    items = props.items
  }
  if (props.width !== undefined) {
    width = props.width
  }
  if (props.marginleft !== undefined) {
    marginleft = props.marginleft
  }
  if (props.marginright !== undefined) {
    marginright = props.marginright
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
      <Gallery hasGutter>
        {items.map((item, index) => (
          <GalleryItem>
            <Card>
              <CardTitle>
                { item.publicName == ''
                  ? "Anonymous"
                  : item.publicName
                }
              </CardTitle>
              <CardBody>
                { item.currency == 'usd' || item.currency == 'cad' || item.currency == 'aud'
                  ? '$'
                  : ''
                }
                { item.currency == 'eur'
                  ? '€'
                  : ''
                }
                { item.currency == 'gbp'
                  ? '£'
                  : ''
                }
                { item.currency == 'jpy'
                  ? '¥'
                  : ''
                }
                {item.amount} {item.currency.toUpperCase() }
              </CardBody>
            </Card>
          </GalleryItem>
        ))}
      </Gallery>
    </div>
  )
}
