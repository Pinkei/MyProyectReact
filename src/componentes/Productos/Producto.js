import React from 'react';

const producto = (props) => {
  return (
    <div>
        <img src={props.img}/>
        <h1>{props.name}</h1>
        <p>{props.role} </p>
        <p>Precio: ${props.precio} </p>
        <button id='{producto.name}' className='btnCompre'>Comprar</button>
    </div>
  )
}

export default producto;
