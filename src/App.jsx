import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { Categorias } from "./pages/TodosLosLibros/Categorias";
import { Nosotros } from "./pages/Nosotros/Nosotros";
import { Carrito } from "./pages/Carrito/Carrito";
import { Error } from "./pages/Error/Error";
import { Layout } from "./pages/Layout/Layout";
import { ListaCategoria } from "./pages/TodosLosLibros/ListaCategoria";
import { CompPadre } from "./context/DatosContext";
import { LibroId } from "./components/Populares/LibroId";
import { Ofertas } from "./pages/ofertas/Ofertas";















function App() {





    return (

        <BrowserRouter>
            <CompPadre>
                <Routes>
                    <Route path="/TheLibrary" element={<Layout />}>
                        <Route index element={<Inicio />} />
                        <Route path="Categorias" element={<Categorias />} />
                        <Route path="Ofertas" element={<Ofertas/>}/>
                        <Route path="Nosotros" element={<Nosotros />} />
                        <Route path="Carrito" element={<Carrito />} />
                        <Route path="Categorias/:id" element={<ListaCategoria />} />
                        <Route path="/TheLibrary/:popularId" element={<LibroId />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </CompPadre>

        </BrowserRouter>


    )






}

export default App;
