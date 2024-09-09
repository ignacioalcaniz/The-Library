import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { Api } from "../peticiones/Api";
import { BookList } from "../BuscarLibros.jsx/BookList";








export const NavBar = () => {

    const [img, setImg] = useState([])

    const buscarLibro = async (libro) => {
        const respuesta = await Api(libro)
        setImg(respuesta)

    }



    return (
        <>
        
            <SearchBar submit={buscarLibro} />
            <div>
            <BookList books={img} />
            </div>
        </>

    )

}