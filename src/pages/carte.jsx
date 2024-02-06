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
                title="Menu Aventure"
                items={[
                    { name: "Salade Cuisinée des Blues", price: 500 },
                    { name: "Soupe de Coquillages de North Blue", price: 800 },
                    { name: "Sauté de Poisson Authentique", price: 1200 },
                    { name: "Velouté à l'Origan", price: 700 },
                    { name: "Cuisses de Grenouilles de Grand Line", price: 1000 },
                    { name: "Tarte aux Fruits des Îles Célestes", price: 600 },
                    { name: "Sorbet aux Baies de Drum Island", price: 400 },
                    { name: "Vin de Loguetown (blanc)", price: 1500 },
                    { name: "Vin de Water 7 (rouge)", price: 1500 }
                ]}
                cover={linkImg1}
                />
                <Menu
                title="Menu Grand Voyageur"
                items={[
                    { name: "Salade Cuisinée des Blues", price: 500 },
                    { name: "Soupe de Coquillages de North Blue", price: 800 },
                    { name: "Sauté de Poisson Authentique", price: 1200 },
                    { name: "Velouté à l'Origan", price: 700 },
                    { name: "Cuisses de Grenouilles de Grand Line", price: 1000 },
                    { name: "Tarte aux Fruits des Îles Célestes", price: 600 },
                    { name: "Sorbet aux Baies de Drum Island", price: 400 },
                    { name: "Vin de Loguetown (blanc)", price: 1500 },
                    { name: "Vin de Water 7 (rouge)", price: 1500 }

                ]}
                cover={linkImg2}
                />
                <Menu
                title="Menu Pirate"
                items={[
                    { name: "Salade Cuisinée des Blues", price: 500 },
                    { name: "Soupe de Coquillages de North Blue", price: 800 },
                    { name: "Sauté de Poisson Authentique", price: 1200 },
                    { name: "Velouté à l'Origan", price: 700 },
                    { name: "Cuisses de Grenouilles de Grand Line", price: 1000 },
                    { name: "Tarte aux Fruits des Îles Célestes", price: 600 },
                    { name: "Sorbet aux Baies de Drum Island", price: 400 },
                    { name: "Vin de Loguetown (blanc)", price: 1500 },
                    { name: "Vin de Water 7 (rouge)", price: 1500 }
                ]}
                cover={linkImg3}
                />
                <Menu
                title="Menu Enfant"
                items={[
                    { name: "Salade Cuisinée des Blues", price: 500 },
                    { name: "Soupe de Coquillages de North Blue", price: 800 },
                    { name: "Sauté de Poisson Authentique", price: 1200 },
                    { name: "Velouté à l'Origan", price: 700 },
                    { name: "Cuisses de Grenouilles de Grand Line", price: 1000 },
                    { name: "Tarte aux Fruits des Îles Célestes", price: 600 },
                    { name: "Sorbet aux Baies de Drum Island", price: 400 },
                    { name: "Jus de Fruits du Démon", price: 300 },
                    { name: "Thé de l'Arbre Eve", price: 200 }
                ]}
                cover={linkImg4}
                />
            </div>
            
        </div>
        <Footer />
        </>
    );
}