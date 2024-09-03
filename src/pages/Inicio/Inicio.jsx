import { Title } from "../../components/Title/Title"
import { NavBar } from "../../components/NavBar/NavBar"
import { LibrosPopulares } from "../../components/Populares/LibrosPopulares"
import { ItemListContainer } from "../../components/ItemListContainer/ItemListContainer"
import { Footer } from "../../components/footer/Footer"
import { Link } from "react-router-dom"



export const Inicio=()=>{
    

    return(
        <>
         <Title/>
        <NavBar />
        <h2 className="text-6xl text-center bg-primary m-2 rounded">Libros Populares:</h2>
        <LibrosPopulares/>
        <h2 className="text-6xl text-center bg-primary m-2 rounded">Ultimos ingresos:</h2>
        <ItemListContainer/>
       <Footer/>
        </>
    )
}