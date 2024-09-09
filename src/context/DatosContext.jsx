import { createContext,useState } from "react"



export const DatosContext=createContext();



export const CompPadre=({children})=>{
    const[contador,setContador]=useState(0)

    return(
       <DatosContext.Provider value={{contador,setContador}}>
        {children}
       </DatosContext.Provider>
    )
}



