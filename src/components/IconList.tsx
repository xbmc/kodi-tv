import React from "react"
import { Gallery, GalleryItem } from "@patternfly/react-core"
import { Link } from "gatsby"

export default function categoryIconList(props: {
  items: any[]
  width: string | undefined
  marginleft: string | undefined
  marginright: string | undefined
  iconwidth: string | undefined
  iconheight: string | undefined
  linkroot: string | undefined
}) {
  let items = []
  let width = "100%"
  let marginleft = "0%"
  let marginright = "0%"
  let iconwidth = "150"
  let iconheight = "150"
  let linkroot = ""
  if (props.items.length == 0) {
      return ('')
  }
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
  if (props.linkroot !== undefined) {
    linkroot = props.linkroot
  }
  if (props.iconwidth !== undefined) {
    iconwidth = props.iconwidth
  }
  if (props.iconheight !== undefined) {
    iconheight = props.iconheight
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
      <Gallery>
        {items.map((item, index) => (
          <GalleryItem>
            <div align="center" style={{paddingBottom: "15px"}}>
              <Link to={linkroot + item.slug}>
                <img width={iconwidth} height={iconheight} alt="" src={item.icon} />
              </Link>
              <div>
                <Link to={linkroot + item.slug}><div dangerouslySetInnerHTML={{ __html: item.name }} /></Link>
              </div>
            </div>
          </GalleryItem>
        ))}
      </Gallery>
    </div>
  )
}
