import { createContext,useState } from "react"

export const DatosContext=createContext();



export const CompPadre=({children})=>{
    const[contador,setContador]=useState(0)
    const[carrito,setCarrito]=useState([])
    const [showInput, setShowInput] = useState(false);
    const [cantidad, setCantidad] = useState(1);

    const handleCantidadChange = (e) => {
        setCantidad(e.target.value);
      };

    const comprar = ({ id, nombre, cantidad, img }) => {
       
        if (cantidad > 0) { 
            setCarrito((prevCarrito) => [
                ...prevCarrito,
                { id, nombre, cantidad, img }
            ]);
        }
    };
  




    return(
       <DatosContext.Provider value={{ contador, setContador, carrito, comprar, showInput, setShowInput,cantidad, handleCantidadChange}}>
        {children}
       </DatosContext.Provider>
    )
}



