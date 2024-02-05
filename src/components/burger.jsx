import React from "react";

import "./local_styles/burger.scss";

export default function Burger(props) {

    function handleClick() {
        // ADD active class
        const burgerElement = document.querySelector(".burger");
        let isActive = burgerElement.classList.contains("active");

        if (burgerElement.classList.contains("active")) {
            burgerElement.classList.remove("active");
            document.querySelector(".overlayMenu").classList.remove("visible");

            return;
        } else {
            burgerElement.classList.add("active");
            document.querySelector(".overlayMenu").classList.add("visible");

            return
        }
    }

    return (
        <>
            <div className="burger" onClick={handleClick} style={{...props.style}}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="overlayMenu">
                <nav>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}