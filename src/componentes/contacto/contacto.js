import React from "react"
import Footer from "../footer/footer"

const contacto = () => {
    return(
        <div>
            <h1>Contacto</h1>
            <h2> Para ponerse en contacto con nosotros complete el siguiente formulario</h2>
        <form>
            <div>
                <label>Nombre</label>
                <input type="text" />
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" />
            </div>
            <div>
                <label>Email</label>
                <input type="text" />
            </div>
            <div>
                <label>Telefono</label>
                <input type="number" />
            </div>
            <div>
                <label>Asunto</label>
                <select>
                    <option value="ch"> Envios</option>
                    <option value="dl"> Presupuestos </option>
                    <option value="lm"> Citas </option>
                </select>
            </div>
            <input type="Submit" value="Enviar" />
        </form>
            <Footer/>
        </div>
    )
}
export default contacto