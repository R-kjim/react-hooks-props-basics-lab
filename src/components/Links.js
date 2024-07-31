import React from "react";
export default function Links(props){
    return (
    <div>
        <h3>Links</h3>
        <a href={props.links}>{props.links}</a>
        <a href={props.links1}>{props.links1}</a>
    </div>
    )
}