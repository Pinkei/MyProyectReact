import React from "react"
import { useForm } from "react-hook-form";
import "./contacto.css"


const Contacto = () => {
    const Enviar = () => {
        alert('Formulario enviado exitosamente ')
    }
    const { register, formState:{errors} ,handleSubmit } = useForm("");
    const onSubmit = (data) =>{
        console.log(data);
    }

    return(
        <div className="form">
            <h1>Contacto</h1>
            <h3 className="guiaTexto"> Para ponerse en contacto con nosotros complete el siguiente formulario</h3>
            <main class="main">

            <form className="formEstilo" onSubmit={handleSubmit(onSubmit)}>
            <div>
                {/* <label>Nombre</label> */}
                <input type="text" placeholder="Nombre" className="inputContenedor" {...register('nombre',{required: true,
                maxLength:10})} />

                {errors.nombre?.type==='required' && <p className="requerimientos">El campo nombre es obligatorio</p>}

                {errors.nombre?.type==='maxlength' && <p className="requerimientos">El campo nombre debe tener menos de 10 caracteres</p>}

            </div>
            <div>
                {/* <label>Apellido</label> */}
                <input type="text" placeholder="Apellido" className="inputContenedor" {...register('apellido',{required: true
                })} />
            </div>
            <div>
                {/* <label>Email</label> */}
                <input type="text" placeholder="Email" className="inputContenedor" {...register('email',{
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                })} />

            {errors.email?.type==='pattern' && <p className="requerimientos">El formato es incorrecto</p>}
            </div>
            <div>
                {/* <label>Telefono</label> */}
                <input type="text" placeholder="Telefono" className="inputContenedor" {...register('telefono',{required: true,
                maxLength:10})} />

                {errors.telefono?.type==='required' && <p className="requerimientos">El campo telefono es obligatorio</p>}

                {errors.telefono?.type==='maxlength' && <p className="requerimientos">El campo telefono debe tener menos de 10 caracteres</p>}

            </div>
            <div>
                <select className="inputContenedor" {...register('metodos')}>
                <option value="as"> Asunto</option>
                    <option value="en"> Envios</option>
                    <option value="pr"> Presupuestos </option>
                    <option value="ct"> Citas </option>
                </select>
            </div>
            <input onClick={()=>Enviar()} type="Submit" value="Enviar" className="botonEnviar"/>
        </form>
        </main>
        </div>
    );
};
export default Contacto