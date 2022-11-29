import React from "react"
import "../nosotros/nosotros.css"
import Carrusel from "../nosotros/carrusel"
import Fotter2 from "../footer/fotter2"


const nosotros = () => {
    return(
        <header className="contenedorNosotros">
            <h1>Nosotros</h1>
            <div>
            <p className="contenedorTexto">Somos una empresa familar que se dedica a la venta de baldosas atermicas hace 11 años, nuestras placas son totalmente atermicas no tienen cemento debajo. Por eso su excelente calidad. La importancia de la placa atermica es que, no se calienta con el sol, no quema los pies al pisarla. No se desgranan nuestras placas. 
                </p>
            </div>
            <div >
            <Carrusel/>
            <Fotter2/>
            </div>
        </header>
        
    )
}
export default nosotros