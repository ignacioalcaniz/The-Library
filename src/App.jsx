import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { Categorias } from "./pages/Categorias/Categorias";
import { Nosotros } from "./pages/Nosotros/Nosotros";
import { Carrito } from "./pages/Carrito/Carrito";
import { Error } from "./pages/Error/Error";
import { Layout } from "./pages/Layout/Layout";
import { ListaCategoria } from "./pages/Categorias/ListaCategoria";














function App() {





    return (

        <BrowserRouter>
            <Routes>
                <Route path="/TheLibrary" element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path="Categorias" element={<Categorias />} />
                    <Route path="Nosotros" element={<Nosotros />} />
                    <Route path="Carrito" element={<Carrito />} />
                    <Route path="Categorias/:libroId" element={<ListaCategoria/>}/>
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>


    )






}

export default App;
