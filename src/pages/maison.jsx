import React from "react";
import Accueil from "../components/Accueil";
import Contact from "../components/premier";
import Footer from "../components/services";
import avantages from "../components/avantages";
import Contact from "../components/Contact";
import pied from "../components/pied";




function Maison() {
    return (
        <>
        <Accueil />
        <main>
                <premier />
                <services />
                <avantages />
                <contact/>
            </main>

            <pied />

            </>
            
)

}

export default Maison;



