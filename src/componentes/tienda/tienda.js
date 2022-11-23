import React from "react"
import "./tienda.css"
import bordel from "../img/bordel.jpeg"
import Footer from "../footer/footer"
import esquinero from "../img/esquinero.jpeg"
import bordeballenas from "../img/bordeballenas.jpeg"

const tienda = () => {
    return(
        <div>
            <h1>Nuestros productos</h1>
            <img src={bordel} className="bordel" alt="borde L"/>
            <img src={esquinero} className="esquinero" />
            <img src={bordeballenas} className="bordesBallena" />
            <Footer/>
        </div>
    )
}
export default tienda