import React from "react"
import {
  Gallery,
  GalleryItem,
  Card,
  CardTitle,
  CardBody,
  CardFooter
} from "@patternfly/react-core"
import { Link } from "gatsby"

export default function categoryIconList(props: {
  authors: any[]
  linkroot: string | undefined
}) {
  let authors = []
  let width = "100%"
  let marginleft = "0%"
  let marginright = "0%"
  let iconwidth = "150"
  let iconheight = "150"
  let linkroot = "/addons/author/"
  if (props.authors[0].node !== undefined) {
    props.authors.map((author: { node: any }, index: any) => authors.push(author.node))
  } else {
    authors = props.authors
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
      <Gallery hasGutter>
        {authors.map((author, index) => (
          <GalleryItem>
            <Card>
              <CardTitle>{author.name}</CardTitle>
              <CardBody>{author.totaladdons + ' addons'}</CardBody>
              <CardFooter><Link to={linkroot + author.slug}>See all addons for this author</Link></CardFooter>
            </Card>
          </GalleryItem>
        ))}
      </Gallery>
    </div>
  )
}
