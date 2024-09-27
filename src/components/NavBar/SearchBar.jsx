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
                <button className="ml-1" onClick={Buscar} ><img src="https://i.ibb.co/VL8WVft/lupa-1.png" alt="" /></button>
            </div>



    )

}