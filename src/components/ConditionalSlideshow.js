import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export default function ConditionalSlideshow(props) {
    if (props.slides.length === 0) {
        return null
    }
    var maxwidth = '1000px'
    if (props.maxwidth !== undefined) {
        maxwidth = props.maxwidth
    }
    return (
        <React.Fragment>
            <div style={{'max-width': maxwidth}}>
                <AwesomeSlider media={props.slides} />
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </React.Fragment>
    )
}
