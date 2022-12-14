import React from "react"
import "./home.css"
import Fotter2 from "../footer/fotter2"
import icon from "../img/icon.jpeg"
import pileLista from "../img/pileLista.jpeg"
import pileta from "../img/pileta.jpeg"


const Home = () => {
    return(
        <main className="contenedorHome">
            <h1 className="titleHome">Bienvenidos</h1>
            <div>
            <img src={icon} className="piletasillon" alt="Foto perfil"/>
            <p className="contenedorbb">Un sistema modular que se adapta según formatos y requerimientos.
Su constitución lo hace un producto atérmico, el cual es ideal ya que su superficie no levanta temperatura.
La porosidad de su textura previene deslizamientos brindando mayor seguridad respecto a otros materiales.</p>
            <img src={pileLista} className="piletasillon" alt="Foto perfil 2"/>
            <img src={pileta} className="piletasillon" alt="Foto perfil 3"/>
            </div>
            <Fotter2/>
        </main>
    );
};
export default Home