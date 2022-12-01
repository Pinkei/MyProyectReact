import React from 'react';

const producto = (props) => {
  const comprar = (nombre) => {
    alert('Compra exitosa ' + nombre)
  }

  return (
    <div>
        <img src={props.img}/>
        <h1 className='titulo'>{props.name}</h1>
        <p className='role'>{props.role} </p>
        <p className='precio'>Precio: <span>${props.precio}</span> </p>
        <button onClick={()=>comprar(props.name)} id='{producto.name}' className='btnCompre'>Comprar</button>
    </div>
  )
}

export default producto;
