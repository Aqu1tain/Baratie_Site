import React from "react";
import { Link } from "react-router-dom";

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
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/Carte">Menu</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}