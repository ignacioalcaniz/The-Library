import "./BookShow.css"

import { useState } from "react"



export const BookShow=({image,title,descripcion})=>{



    return(
        <>
        <div className="book-contenedor ">
          <h3>{title.volumeInfo.title}</h3>
          <img src={image.volumeInfo.imageLinks.smallThumbnail} alt="bookImage" />
          <p>{descripcion.volumeInfo.description}</p>
        </div>
        
        </>
    )
}