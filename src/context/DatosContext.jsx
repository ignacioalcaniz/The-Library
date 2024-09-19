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

    const comprar = ({ id, nombre, cantidad, img,descripcion,precio }) => {
       
        if (cantidad > 0) { 
            setCarrito((prevCarrito) => [
                ...prevCarrito,
                { id, nombre, cantidad, img,descripcion,precio }
            ]);
        }
    };
    const eliminar = (id) => {
    
        setCarrito((prevCarrito) => {
            const nuevoCarrito = prevCarrito.filter(item => item.id !== id);
            return nuevoCarrito;
            
        });
        setContador(contador-1)
    };
  const editar=()=>{

  }
  const finalizarCompra=()=>{

  }




    return(
       <DatosContext.Provider value={{ contador, setContador, carrito, comprar, showInput, setShowInput,cantidad, handleCantidadChange,eliminar}}>
        {children}
       </DatosContext.Provider>
    )
}



