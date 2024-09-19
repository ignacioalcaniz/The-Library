import { LibrosPopulares } from "../../components/Populares/LibrosPopulares"
import { NavBar } from "../../components/NavBar/NavBar"



export const Inicio=()=>{
    

    return(
        <>
          <NavBar/>
     
      <main className="m-5">
        
        <h2 className="text-6xl text-center bg-primary m-2 rounded">Libros Populares:</h2>
        <LibrosPopulares/>
      
      
        
      
      </main>
        
      
      
        </>
    )
}