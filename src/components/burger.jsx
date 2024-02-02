import React from "react";

import "./local_styles/burger.scss";

export default function Burger(props) {
    return (
        <div className="burger" onClick={props.onClick} style={{...props.style}}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}