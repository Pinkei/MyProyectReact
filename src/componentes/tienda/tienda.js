import "./tienda.css"
import Footer from "../footer/footer"
import Productos from "../Productos/Productos"

const tienda = () => {
    
    return(
        <div>
            <h1>Nuestros productos</h1>
            <Productos/>
            <Footer/>
        
        </div>
    )
}
export default tienda