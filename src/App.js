import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//importo los componentes creados
import Home from './componentes/home/home';
import Contacto from './componentes/Contacto/Contacto';
import Nosotros from './componentes/nosotros/nosotros';
import Tienda from './componentes/tienda/tienda';
import NavBarExamples from './componentes/navbar/navbar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          //ruta padre 
        <Route path='/' element={<NavBarExamples/>}>
          <Route index element={<Home/>} />
          <Route path='Contacto' element={<Contacto/>}/>
          <Route path='nosotros' element={<Nosotros/>} />
          <Route path='tienda' element={<Tienda/>} />
          
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
