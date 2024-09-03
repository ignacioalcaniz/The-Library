import { ApiLocal } from "../peticiones/ApiLocal"
import { LibrosList } from "./LibrosList";
import { useState } from "react";


export const LibrosPopulares=()=>{

    const[libro,setLibro]=useState([])

    const LibrosLocales= async ()=>{
        const response=await ApiLocal();
        setLibro(response)
        
    }
    LibrosLocales();


    return(
        <>
        <div>
            <LibrosList LibrosLocales={libro}/>
        </div>



        </>
    )
}
