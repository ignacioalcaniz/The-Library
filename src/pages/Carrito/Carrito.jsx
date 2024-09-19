import { useContext } from "react";
import { DatosContext } from "../../context/DatosContext";
import "./Carrito.css"


export const Carrito=()=>{

    const { carrito,eliminar } = useContext(DatosContext);
  

    return(
        <>
         <main>
            <h4 className="text-6xl text-center bg-primary m-2 rounded">Carrito:</h4>
           


  <div className=" contenedor ">
    {carrito.length === 0 ? (
      <p>No hay elementos en el carrito.</p>
    ) : (
      <ul className="row">
        {carrito.map((item) => (
          <li className="producto" key={item.id}>
            {item.nombre} - Cantidad: {item.cantidad}
            <p>Precio:${item.precio}</p>
            <img src={item.img} alt={item.nombre} />
            <p>{item.descripcion}</p>
            <button onClick={()=>eliminar(item.id)}>Eliminar</button>
            <button>Editar</button>
          </li>
        ))}
      </ul>
    )}
    {
    carrito.length >0 && 
    <button>crear orden</button>
    }
    
  </div>



        </main>
      
        
        </>
    )
}