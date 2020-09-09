import React from 'react'
import {
    Gallery, GalleryItem
} from '@patternfly/react-core'
import AddonModal from 'src/components/AddonModal'

export default function categoryIconList(props) {
    var addons = []
    if (props.addons[0].node !== undefined){
        props.addons.map((item, index) =>
            addons.push(item.node)
        )
    } else {
        addons = props.addons
    }
    return (
        <Gallery>
            {addons.map((addon, index) =>
                <GalleryItem>
                    <div align="center">
                        <p>&nbsp;</p>
                        <img width='150' height='150' alt="" src={addon.icons[0].localpath} />
                        <div><AddonModal addon={addon}/></div>
                    </div>
                </GalleryItem>
            )}
        </Gallery>
    )
}
