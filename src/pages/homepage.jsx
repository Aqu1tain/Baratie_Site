import baratimg from "../assets/baratie-ext.png";
import Card from "../components/card";
import PlatsCard from "../components/platscard";
import Burger from "../components/burger";
import "./local_styles/homepage.scss";

import React from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
    /*
    gsap.utils.toArray(".panel").forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            pinSpacing: true,
        });
    });

    ScrollTrigger.create({
        snap: 1 / 2
    });
    */
    return (
        <div className="homepage">
            <Burger style={{ top: 20, left: 20 }} />
            <section className="panel catchtitle">
                <h1>Baratie</h1>
            </section>
            <section className="panel aboutus">
                <h2>Qui sommes-nous</h2>
                <div className="text-image-container">
                    <p>
                        Fondé en 1513 par l'ex-pirate Zeff aux Pieds Rouges, le Baratie est bien plus qu'un simple restaurant flottant. Le chef Zeff, ancien pirate au passé légendaire, a transformé son repaire en un lieu où les mers se rencontrent à travers des saveurs uniques de toutes les îles. Notre établissement accueille des aventuriers de tous horizons, offrant une pause gastronomique inoubliable. Rejoignez-nous au Baratie, où chaque plat raconte une histoire d'aventure et chaque bouchée est une découverte des mers et des saveurs du monde. <br />
                        Le Chef Zeff, maître incontesté des cuisines du Baratie, met son expérience de pirate et son amour pour la cuisine dans chaque plat. Chaque mets raconte une histoire, une aventure culinaire qui transporte nos clients au-delà des horizons connus.
                    </p>
                    <img src={baratimg} alt="" width={"614px"} height={"391px"} />
                </div>
            </section>
            <section className="panel platsphares">
                <h2>Nos plats phares</h2>
                <PlatsCard />
            </section>
        </div>
    );
}
