import React from "react";
import './intro.css';


const Intro = ({titulo}) => {
    return(
        /* creamos ese parametreo llamado titulo para reutilizxar todas las veces que queira en mis distintas secciones y poder escribir lo que quiera, ene ste caso lo puse en home */
        <h1>{titulo} </h1>
        
    );
};
export default Intro 
