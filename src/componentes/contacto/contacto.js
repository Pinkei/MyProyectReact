import React from "react"
import { useForm } from "react-hook-form";
import "./contacto.css"
import Footer from "../footer/footer"

const Contacto = () => {
    const { register, handleSubmit } = useForm("");
    const onSubmit = (data) =>{
        console.log(data);
    }

    return(
        <div>
            <h1>Contacto</h1>
            <h3> Para ponerse en contacto con nosotros complete el siguiente formulario</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre',{required: true,
                maxLength:10})} />
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" {...register('apellido',{required: true
                })} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" {...register('email',{
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                })} />
            </div>
            <div>
                <label>Telefono</label>
                <input type="number" />
            </div>
            <div>
                <label>Asunto</label>
                <select {...register('metodos')}>
                    <option value="en"> Envios</option>
                    <option value="pr"> Presupuestos </option>
                    <option value="ct"> Citas </option>
                </select>
            </div>
            <input type="Submit" value="Enviar" />
        </form>
            <Footer/>
        </div>
    )
}
export default Contacto