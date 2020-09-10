import React from 'react'
import {
    Gallery, GalleryItem
} from '@patternfly/react-core'
import { Link } from "gatsby"

export default function categoryIconList(props) {
    var items = []
    if (props.items[0].node !== undefined){
        props.items.map((item, index) =>
            items.push(item.node)
        )
    } else {
        items = props.items
    }
    
    return (
        <Gallery>
            {items.map((item, index) =>
                <GalleryItem>
                    <div align="center">
                        <p>&nbsp;</p>
                        <img width='150' height='150' alt="" src={item.icon} />
                        <div>
                            <Link to={props.linkroot + item.slug}>{item.name}</Link>
                        </div>
                    </div>
                </GalleryItem>
            )}
        </Gallery>
    )
}
