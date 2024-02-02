import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <ul>
                {props.ingredients && props.ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
            </ul>
            <p>{props.children}</p>
        </div>
    )
}