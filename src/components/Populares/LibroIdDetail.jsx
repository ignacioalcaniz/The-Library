

export const LibroIdDetail=({name,img,descripcion,precio,stock})=>{



    return(
        <>
         <div className='carta-libroId'>
          <h1 className='text-center'>{name}</h1>
          <img className='img-carta' src={img} alt="" />
          <p className='text-center'>{descripcion}</p>
          <p className='text-center' >${precio}</p>
          <p  className='text-center'>Cantidad:{stock}</p>
          <button className="boton-id "> <img className='img-id' src="https://i.ibb.co/rxP7CwT/carrito-de-compras-2.png" alt="" /></button>
         
        </div>
        </>
    )
}