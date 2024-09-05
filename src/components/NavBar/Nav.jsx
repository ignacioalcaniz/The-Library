import "./Nav.css"
import { Link } from "react-router-dom"
import { CardWidget } from "./CardWidget"

export const Nav = () => {


    return (
        <>
            <nav className="Nav m-2 rounded border-4 border-black position-sticky top-0" >

                <ul className="	flex justify-between m-6 text-2xl p-auto align-items-center  ">
                    <li><Link to={"/TheLibrary"}>INICIO</Link></li>
                    <li><Link to={"/TheLibrary/Categorias"}>TODOS LOS LIBROS:</Link></li>
                    <li><Link to={"/TheLibrary/Nosotros"}>NOSOTROS:</Link></li>
                    <li><Link to={"/TheLibrary/Carrito"}><CardWidget /></Link></li>
                </ul>

            </nav>
        </>
    )
}