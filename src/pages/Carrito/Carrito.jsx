import { useContext } from "react";
import { DatosContext } from "../../context/DatosContext";


export const Carrito=()=>{

    const { carrito } = useContext(DatosContext);

    return(
        <>
         <main>
            <h4 className="text-6xl text-center bg-primary m-2 rounded">Carrito:</h4>
           


  <div className="row">
    <h2>Carrito:</h2>
    {carrito.length === 0 ? (
      <p>No hay elementos en el carrito.</p>
    ) : (
      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            {item.nombre} - Cantidad: {item.cantidad}
            <img src={item.img} alt={item.nombre} />
          </li>
        ))}
      </ul>
    )}
  </div>



        </main>
      
        
        </>
    )
}