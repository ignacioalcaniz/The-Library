import { useState } from "react";
import { CardWidget } from "./CardWidget";
import { SearchBar } from "./SearchBar";
import { Api } from "../peticiones/Api";
import { BookList } from "../BuscarLibros.jsx/BookList";
import { Link } from "react-router-dom";
import "./NavBar.css"






export const NavBar = () => {

    const [img, setImg] = useState([])

    const buscarLibro = async (libro) => {
        const respuesta = await Api(libro)
        setImg(respuesta)

    }



    return (
        <>
            <nav className="bg-primary m-2 rounded border-4 border-black position-sticky top-0" >

                <ul className="	flex justify-between m-6 text-2xl p-auto align-items-center  ">
                    <li><a href="">INICIO</a></li>
                    <li><a href="">CATÁLOGO</a></li>
                    <li><a href="">SOBRE NOSOTROS</a></li>
                    <li><a href=""><CardWidget/></a></li>
                </ul>
                <SearchBar submit={buscarLibro} />
            </nav>
            <div>
                <BookList books={img} />
            </div>
        </>

    )

}