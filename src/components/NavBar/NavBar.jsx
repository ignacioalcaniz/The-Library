import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { Api } from "../peticiones/Api";
import { BookList } from "../BuscarLibros.jsx/BookList";
import { Loader } from "../Loader/Loader";








export const NavBar = () => {

    const [img, setImg] = useState([])

    const buscarLibro = async (libro) => {
        try{
            const respuesta = await Api(libro)
        setImg(respuesta)
        }
        catch{
            <Loader/>
        }

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