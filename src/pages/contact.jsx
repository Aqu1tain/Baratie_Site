import React from "react";

import "./local_styles/contact.scss";

import Burger from "../components/burger";

import Footer from "../components/footer";

export default function Contact() {

    return (
        <>
            <Burger style={{ top: 20, left: 20 }}/>
            <div className="contact">
                <div className="contact-container">
                    <div className="form">
                        <h1>Nous contacter</h1>
                        <div className="form-container">
                            <div>
                                <h2>Horaires</h2>
                                <p>
                                    <span>Lundi - Samedi</span><br />
                                    <span>10h - 22h</span>
                                </p>
                                <h2>Nous trouver</h2>
                                <p>
                                    <span>48.8927415,2.2391581</span><br />
                                    <span>Région Sambas</span><br />
                                    <span>East Blue</span><br />
                                </p>
                            </div>
                            <form>
                                <input type="text" placeholder="Zeff"/>
                                <input type="text" placeholder="zeff@piedsrouges.com" />
                                <textarea placeholder="Message"></textarea>
                                <button type="submit">Envoyer</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}