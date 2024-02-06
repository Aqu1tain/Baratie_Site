import React from 'react';

// Composant Menu
export default function Menu(props) {
    return (
        <div className="menu">
            <h2>{props.title}</h2>
            <ul>
            {props.items.map((item, index) => (
                <li key={index}>
                {item.name} - {item.price} Berries
                </li>
            ))}
            </ul>
        </div>
    )
};