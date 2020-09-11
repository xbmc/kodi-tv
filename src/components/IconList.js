import React from 'react'
import {
    Gallery, GalleryItem
} from '@patternfly/react-core'
import { Link } from "gatsby"

export default function categoryIconList(props) {
    var items = []
    var width = '100%'
    var marginleft = '0%'
    var marginright = '0%'
    if (props.items[0].node !== undefined){
        props.items.map((item, index) =>
            items.push(item.node)
        )
    } else {
        items = props.items
    }
    if (props.width !== undefined){
        width = props.width
    }
    if (props.marginleft !== undefined){
        marginleft = props.marginleft
    }
    if (props.marginright !== undefined){
        marginright = props.marginright
    }
    
    return (
        <div style={{'width': width, 'margin-left': marginleft, 'margin-right':marginright, 'padding-top': '10px'}}>
            <Gallery hasGutter>
                {items.map((item, index) =>
                    <GalleryItem>
                        <div align="center">
                            <Link to={props.linkroot + item.slug}>
                                <img width='150' height='150' alt="" src={item.icon} />
                            </Link>
                            <div>
                                <Link to={props.linkroot + item.slug}>{item.name}</Link>
                            </div>
                        </div>
                    </GalleryItem>
                )}
            </Gallery>
        </div>
    )
}
