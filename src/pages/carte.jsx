import React from "react";

import "./local_styles/carte.scss";

import Burger from "../components/burger";
import Menu from "../components/menu";
import Footer from "../components/footer";

import linkImg1 from "../assets/images/image1.png";
import linkImg2 from "../assets/images/image2.png";
import linkImg3 from "../assets/images/image3.png";
import linkImg4 from "../assets/images/image4.jpg";

export default function Carte() {
    return (
        <>
        <div className="carte">
            <Burger style={{ top: 20, left: 20 }} />
            <div className="panel menus">
                <h1>Nos Menus</h1>
                <Menu
                title="Menu Déjeuner"
                items={[
                    { "name": "Soupe de poisson frais du jour", "price": 6500 },
                    { "name": "Salade de fruits de mer avec vinaigrette maison", "price": 5200 },
                    { "name": "Filet de poisson frais grillé (selon arrivage)", "price": 13000 },
                    { "name": "Riz blanc aux algues ou pommes de terre sautées", "price": 3500 },
                    { "name": "Légumes de saison sautés à l'ail et aux herbes marines", "price": 4800 },
                    { "name": "Tarte aux fruits de mer en dessert", "price": 8500 }
                ]}
                cover={linkImg1}
                />
                <Menu
                title="Menu Dîner"
                items={[
                    { "name": "Salade de fruits de mer César", "price": 6000 },
                    { "name": "Plateau de fruits de mer grillés (homard, crevettes, calamars)", "price": 16500 },
                    { "name": "Pommes de terre au four garnies de crème fraîche aux algues", "price": 4200 },
                    { "name": "Légumes de saison sautés à l'huile d'olive et aux herbes marines", "price": 5600 },
                    { "name": "Crème brûlée aux fruits de la passion", "price": 9800 }

                ]}
                cover={linkImg2}
                />
                <Menu
                title="Menu Spécial du Chef"
                items={[
                    { "name": "Huîtres fraîches sur lit de glace avec sauce mignonette", "price": 5000 },
                    { "name": "Sashimi de thon rouge avec sauce soja et wasabi", "price": 6800 },
                    { "name": "Plateau royal de fruits de mer (homard, langoustines, crabe royal)", "price": 15000 },
                    { "name": "Risotto aux fruits de mer (moules, crevettes, calmars)", "price": 4800 },
                    { "name": "Légumes de saison rôtis au four avec sauce au beurre à l'ail", "price": 4200 },
                    { "name": "Mousse au chocolat noir avec coulis de fruits rouges", "price": 7500 }
                ]}
                cover={linkImg3}
                />
                <Menu
                title="Menu Enfant"
                items={[
                    { "name": "Fish and chips de poisson blanc croustillant", "price": 5000 },
                    { "name": "Frites maison", "price": 2800 },
                    { "name": "Mini pizza aux fruits de mer", "price": 4500 },
                    { "name": "Glace à la vanille avec des fruits de mer en chocolat", "price": 3500 }
                ]}
                cover={linkImg4}
                />
            </div>
            
        </div>
        <Footer />
        </>
    );
}