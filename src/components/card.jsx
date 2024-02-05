import React, { useState } from "react";
import { debounce } from "lodash";
import "./local_styles/card.scss";

export default function Card(props) {
  return (
    <div className="card">
        <img
        id={props.id}
        className="card-img"
        src={props.imgsrc}
        alt=""
        />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <ul>
        {props.ingredients &&
            props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <p>{props.children}</p>
    </div>
    );
}
