import React from "react";

import Card from "./card";

import "./local_styles/platscard.scss";

export default function PlatsCard() {
    return (
        <div className="platscard">
            <Card id="2" title="Sauté de Poisson Authentique" ingredients={["Thon-éléphant", "Asperges fraîches", "Sauce sucrée (à base de fruits de mer, de soja)"]} description="Un délice des mers combinant le thon-éléphant rare et des asperges fraîches, le tout sauté dans une réduction de sauce sucrée." imgsrc={require("../assets/thon-elephant.png")}>L'équilibre parfait entre la tendresse du poisson et la fraîcheur des légumes fait de ce plat une expérience culinaire inoubliable</Card>
            <Card id="2" title="Velouté à l'Origan" ingredients={["Herbes d'origan des Blues", "Crème fraîche", "Croutons dorés", "Citrouille"]} description="Un velouté crémeux aux herbes d'origan des Blues, garni de croutons dorés. " imgsrc={require("../assets/veloute.png")}>L'arôme subtil de l'origan se mélange à la douceur de la crème, offrant une entrée délicate qui éveille les papilles.</Card>
            <Card id="3" title="Cuisses de Grenouilles" ingredients={["Cuisses de grenouilles", "Pommes de terre de Skypiea", "Épices spéciales du chef","Sauce à l’origan"]} description="Les cuisses de grenouilles sautées, une spécialité unique du Chef Zeff, sont préparées avec une touche spéciale." imgsrc={require("../assets/grenouille.png")}> Accompagnées de pommes de terre de Skypiea, ces cuisses offrent une explosion de saveurs.</Card>
        </div>
    )
}