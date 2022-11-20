import React from "react"
import "./home.css"
import Intro from "../intro/intro"
import Footer from "../footer/footer"
import icon from "../img/icon.jpeg"


const Home = () => {
    return(
        <header>
            <h1>Bienvenidos</h1>
            <div className="homeImg">
            <img src={icon} className="piletasillon" alt="Foto perfil"/>
            </div>
            <Intro titulo="Cosme fulanito" />
            <Footer/>
        </header>
    );
};
export default Home