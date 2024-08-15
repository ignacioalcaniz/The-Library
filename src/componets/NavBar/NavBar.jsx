import { useState } from "react";
import { CardWidget } from "./CardWidget";


export const NavBar=()=>{
    return(
        <>
        <nav className="bg-primary m-2 rounded" >
            <ul className="	flex justify-between m-6 text-2xl p-auto ">
                <li><a href="">Inicio</a></li>
                <li><a href="">Catalogo</a></li>
                <li><a href="">Sobre Nosotros:</a></li>
                <li><a href=""/><CardWidget/></li>
            </ul>
        </nav>
        
        </>
    )
}