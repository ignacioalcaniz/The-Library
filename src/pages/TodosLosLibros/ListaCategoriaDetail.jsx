


export const ListaCategoriaDetail=({name,autor,categoria,img,precio,descripcion,stock})=>{


    return(
        <>
          <h5 className="text-center">{name}</h5>
          <h5 className="text-center">{autor}</h5>
          <h5 className="text-center">{categoria}</h5>
          <img className="img-lista" src={img} alt={name} />
          <h6 className="text-center">Precio: ${precio}</h6>
          <p className="text-center">Descripción:</p>
          <p className="text-center bg-light">{descripcion}</p>
          <p className="text-center">Cantidad disponible: {stock}</p>
          
        </>
    )
}