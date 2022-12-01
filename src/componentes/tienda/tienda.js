import Fotter2 from "../footer/fotter2"
import Productos from "../Productos/Productos"
import "../Productos/productos.css"


const tienda = () => {
    
    return(
        <div>
            <h1 className="titleTienda">Nuestros productos</h1>
            <Productos/>
            <Fotter2/>
        
        </div>
    )
}
export default tienda