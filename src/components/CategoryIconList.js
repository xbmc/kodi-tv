import React from 'react'
import {
    Gallery, GalleryItem
} from '@patternfly/react-core'
import { Link } from "gatsby"

export default function categoryIconList(props) {
    
    return (
        <Gallery>
            {props.categories.map((item, index) =>
                <GalleryItem>
                    <div align="center">
                        <p>&nbsp;</p>
                        <img width='150' height='150' alt="" src={item.node.icon} />
                        <div>
                            <Link to={'/addons/category/' + item.node.slug}>{item.node.name}</Link>
                        </div>
                    </div>
                </GalleryItem>
            )}
        </Gallery>
    )
}
