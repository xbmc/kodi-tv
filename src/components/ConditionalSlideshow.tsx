import React from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

export default function ConditionalSlideshow(props: {
  slides: string
  maxwidth: string | undefined
}) {
  if (props.slides.length === 0) {
    return null
  }
  let maxwidth = "1000px"
  if (props.maxwidth !== undefined) {
    maxwidth = props.maxwidth
  }
  return (
    <React.Fragment>
      <div style={{ maxWidth: maxwidth, paddingBottom: "40px" }}>
        <AwesomeSlider media={props.slides} />
      </div>
    </React.Fragment>
  )
}
