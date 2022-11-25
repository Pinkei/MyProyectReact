import React from "react"
import { useForm } from "react-hook-form";
import "./contacto.css"


const Contacto = () => {
    const { register, formState:{errors} ,handleSubmit } = useForm("");
    const onSubmit = (data) =>{
        console.log(data);
    }

    return(
        <div className="form">
            <h1>Contacto</h1>
            <h3> Para ponerse en contacto con nosotros complete el siguiente formulario</h3>
            <form className="formEstilo" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre',{required: true,
                maxLength:10})} />

                {errors.nombre?.type==='required' && <p>El campo nombre es obligatorio</p>}

                {errors.nombre?.type==='maxlength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}

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

            {errors.email?.type==='pattern' && <p>El formato es incorrecto</p>}
            </div>
            <div>
                <label>Telefono</label>
                <input type="number"{...register('telefono',{required: true,
                maxLength:10})} />

                {errors.telefono?.type==='required' && <p>El campo telefono es obligatorio</p>}

                {errors.telefono?.type==='maxlength' && <p>El campo telefono debe tener menos de 10 caracteres</p>}

            </div>
            <div>
                <label>Asunto</label>
                <select {...register('metodos')}>
                    <option value="en"> Envios</option>
                    <option value="pr"> Presupuestos </option>
                    <option value="ct"> Citas </option>
                </select>
            </div>
            <input type="Submit" value="Enviar" className="botonEnviar"/>
        </form>
        
        </div>
    );
};
export default Contacto