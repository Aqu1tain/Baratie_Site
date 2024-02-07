import React from 'react';

import './local_styles/menu.scss';

// Composant Menu
export default function Menu(props) {
    return (
        <div className="menu">
            
            <div className="text-image-container">
                <h2>{props.title}</h2>
                <ul>
                {props.items.map((item, index) => (
                    <li key={index}>
                    {item.name} - {item.price} ฿
                    </li>
                ))}
                </ul>
                
            </div>
            <img className="cover-img" src={props.cover} alt=""/>
        </div>
    )
};