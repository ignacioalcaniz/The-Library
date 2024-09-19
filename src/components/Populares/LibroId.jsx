import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection,getDocs,getFirestore } from 'firebase/firestore';
import "./LibroId.css"
import { Loader } from '../Loader/Loader';

export const LibroId = () => {
  const { popularId } = useParams();
  const [libro, setLibros] = useState(null);

  useEffect(() => {
   
      const db=getFirestore();
      const items=collection(db,"products")
      getDocs(items)
      .then((snapshot)=>{
        const foundLibro = snapshot.docs.find(libro => libro.id == popularId);
        setLibros(foundLibro.data());
      })
      
   

   
  }, [popularId]);

  return (
    <main>
            <div className='div-carta'>
      {libro ? (
        <div className='carta-libroId'>
          <h1 className='text-center'>{libro.name}</h1>
          <img className='img-carta' src={libro.img} alt="" />
          <p className='text-center'>{libro.descripcion}</p>
          <p className='text-center' >${libro.precio}</p>
          <p  className='text-center'>Cantidad:{libro.stock}</p>
          <button className="boton-id "> <img className='img-id' src="https://i.ibb.co/rxP7CwT/carrito-de-compras-2.png" alt="" /></button>
         
        </div>
      ) : (
        <Loader/>
      )}
    </div>
    </main>

  );
};
