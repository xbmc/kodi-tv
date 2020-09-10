import React from 'react'
import { Link } from 'gatsby'

export default function ItemWithComma(props) {
    if (props.index === props.length) {
        if (props.url === undefined) {
            return (
                <React.Fragment>{props.description}</React.Fragment>
            )
        } else {
            return (
                <React.Fragment><Link to={props.url}>{props.description}</Link></React.Fragment>
            )
        }
    } else {
        if (props.url === undefined){
            return (
                <React.Fragment>{props.description}, </React.Fragment>
            )                
        } else {
            return (
                <React.Fragment><Link to={props.url}>{props.description}</Link>, </React.Fragment>
            )        
        }
    }
}

