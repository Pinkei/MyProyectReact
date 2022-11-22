import React from "react"
import "../nosotros/nosotros.css"
import Piletacuatro from "../img/Piletacuatro.jpg"
import img_pag from "../img/img_pag.png"


const nosotros = () => {
    return(
        <header>
            <h1>Nosotros</h1>
            <div className="contenedorTexto">
            <p>Somos una empresa familar que se dedica a la venta de baldosas atermicas hace 11 años, nuestras placas son totalmente atermicas no tienen cemento debajo. Por eso su excelente calidad. La importancia de la placa atermica es que, no se calienta con el sol, no quema los pies al pisarla. No se desgranan nuestras placas. Se puede usar en Terrazas queda muy bien y no quemaría los pies. Debido a eso la casa también quedaría más fría. Solo se debe tener en cuenta si el techo soporta el peso ya que cada una pesa 7.3 kilos. 
                </p>
            </div>
            {/* agegar un carrosuel para que vayan pasando las fotos */}
            <div className="contenedorImagen">
            {/* <img src={Piletacuatro} className="presentacionPile" alt="Armado de pileta"/> */}
            <img src={img_pag} className="imagenPagina" alt="pileta"/>
            </div>
        </header>

    )
}
export default nosotros