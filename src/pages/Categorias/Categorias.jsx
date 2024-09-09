import "./Categorias.css"
import { Link } from "react-router-dom"
import { categoriasLibros } from "../../components/arrayLibros"




export const Categorias = () => {



    return (
        <>
            <main>
                <h4 className="text-6xl text-center bg-primary m-2 rounded">Categorias:</h4>
                <div className="contenedorLibros" >
                    {categoriasLibros.map((libro) => {
            return (
               
             <article className="cards" key={libro.id}>
                <h4 className="text-center">{libro.categoria}</h4>
                    <h5 className="text-center">{libro.nombre}</h5>
                    <img className="img-card" src={libro.imagen} alt="bookimage" />
                    <p>${libro.precio}</p>
                   
                    <button className="boton-info"><Link to={`${libro.id}`}>MAS INFO:</Link></button>
                  
                </article>
           
                    
            )
        })}
        </div>

            </main>




        </>
    )
}
