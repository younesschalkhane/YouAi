import React from "react";
import Premier from "../components/premier";
import Accueil from "../components/accueil";
import Services from "../components/services";
import Avantages from "../components/avantages";
import Contact from "../components/contact";

function Maison() {
    return (

      <>
        <Premier  />

        <main>

              <Accueil    />
              <Services   />
              <Avantages  />
              <Contact    />
    

         </main>

    <Pied/>

    </>

    ) 

    }
    
 export default Maison



        



