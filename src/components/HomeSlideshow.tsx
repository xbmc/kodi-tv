import React from "react"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import "react-awesome-slider/dist/styles.css"

export default function HomeSlideshow() {
  const AutoplaySlider = withAutoplay(AwesomeSlider)
  const slides = [
    {source: '/images/heroes/addons.jpg', children: "Testing"},
    {source: '/images/heroes/community.jpg', children: "More Testing"},
    {source: '/images/heroes/ultimate-mediacenter.jpg', children: "Even More Testing"},
  ]
  return (
    <React.Fragment>
      <div style={{ marginTop: "-55px", overflow: "hidden", maxHeight: "540px", marginRight: "-55px", marginLeft: "-55px" }}>
        <AutoplaySlider 
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
          media={slides}
        />
      </div>
    </React.Fragment>
  )
}
