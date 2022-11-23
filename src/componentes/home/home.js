import React from "react"
import "./home.css"
import Footer from "../footer/footer"
import icon from "../img/icon.jpeg"
import pile from "../img/pile.jpeg"
import pileta from "../img/pileta.jpeg"



const Home = () => {
    return(
        <header>
            <h1>Bienvenidos</h1>
            <div>
            <img src={icon} className="piletasillon" alt="Foto perfil"/>
            <p className="contenedorbb">Un sistema modular que se adapta según formatos y requerimientos.
Su constitución lo hace un producto atérmico, el cual es ideal ya que su superficie no levanta temperatura.
La porosidad de su textura previene deslizamientos brindando mayor seguridad respecto a otros materiales.</p>
            <img src={pile} className="pileDos" alt="Foto perfil 2"/>
            <img src={pileta} className="pileTres" alt="Foto perfil 3"/>
            </div>
            <Footer/>
        </header>
    );
};
export default Home