import { Link } from "react-router-dom"



export const Error=()=>{


    return(


        <>
        <h3>404 Not Found</h3>
        <p>Pagina no encontrada</p>
        <button><Link to={"/TheLibrary"}>Volver</Link></button>
        </>
    )
}