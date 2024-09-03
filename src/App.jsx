import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { Catalogo } from "./pages/Catalogo/Catalogo";
import { Nosotros } from "./pages/Nosotros/Nosotros";
import { Carrito } from "./pages/Carrito/Carrito";










function App() {





    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="Catalogo" element={<Catalogo/>} />
                <Route path="Nosotros" element={<Nosotros/>} /> 
                <Route path="Carrito"  element={<Carrito/>}/>
            </Routes>
        </BrowserRouter>


    )






}

export default App;
