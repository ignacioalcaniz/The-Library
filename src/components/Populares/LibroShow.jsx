import "./LibroShow.css"


export const LibroShow=({titulo,autor,imagen,descripcion})=>{


    return(
        <>
        <div className="carta ">
            <h3 className="text-center">{titulo.titulo}</h3>
            <h4 className="text-center">{autor.autor}</h4>
            <img src={imagen.imagen} alt="" />
            <p className="text-center">{descripcion.descripcion}</p>

        </div>
        
        
        </>
    )
}