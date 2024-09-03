import axios from "axios"


export const ApiLocal= async()=>{
    const respuesta= await axios.get("http://localhost:3000/productos.json")
   

 
  return respuesta.data;

}
