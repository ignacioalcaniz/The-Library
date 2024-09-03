import { useState } from "react";
import "./SearchBar.css"


export const SearchBar = ({submit}) => {

const [libro,setLibro]=useState("");

const Buscar=()=>{
  submit(libro)
}

const change=(event)=>{
    setLibro(event.target.value)

}
   
   
    return (

       
            <div className="BarraNavegacion" >
                <input value={libro}  onChange={change} type="text" />
                <button onClick={Buscar} ><img src="./img/buscar.png" alt="" /></button>
            </div>



    )

}