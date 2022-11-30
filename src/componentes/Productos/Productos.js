import { useState } from "react";
import React from "react";
import "./productos.css";
import Producto from "../Productos/Producto";




const Productos = () => {

    const [Productos] = useState([
        { 
          id: 1,
          name: "Borde ballenas",
          precio: 1350,
          role: "Borde para las pileta de fibra",
          img: "https://www.ropelato.com.ar/10236-medium_default/baldoson-atermico-blanco-borde-ballena-20x40-x-unidad.jpg"
          
        },
        {
          id: 2,
          name: "Borde L",
          precio: 1350,
          role: "Bordes para las piletas de cemento",
          img: "https://http2.mlstatic.com/D_NQ_NP_680276-MLA48993054428_022022-O.webp"
        },
        {
          id: 3,
          name: "Esquineros",
          precio: 1350,
          role: "Esquienros para pileta de fibra",
          img: "https://http2.mlstatic.com/D_NQ_NP_658465-MLA52308128836_112022-O.webp"
        },
        {
          id: 4,
          name: "Contracurva",
          precio: 1350,
          role: "Esquienros para pileta con arco romano",
          img: "https://http2.mlstatic.com/D_NQ_NP_872875-MLA31081794289_062019-O.jpg"
        },
        {
          id: 5,
          name: "Borde contracurvo",
          precio: 1350,
          role: "Para los arco romanos",
          img: "https://http2.mlstatic.com/D_NQ_NP_755004-MLA48992923017_022022-O.webp"
        },
        {
          id: 6,
          name: "Arranque",
          precio: 1350,
          role: "Para los arco romanos",
          img: "https://http2.mlstatic.com/D_NQ_NP_718740-MLA48993153154_022022-O.webp"
        }
        
      ]);

return (
    <div className="atermicosProductos">
    {Productos.map((producto) => {
        return <Producto key={producto.id} name={producto.name} precio={producto.precio} img={producto.img} role={producto.role} />;
    })}
    </div>
);
};
export default Productos

