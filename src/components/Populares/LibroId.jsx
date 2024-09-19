import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection,getDocs,getFirestore } from 'firebase/firestore';
import "./LibroId.css"
import { Loader } from '../Loader/Loader';
import { LibroIdDetail } from './LibroIdDetail';

export const LibroId = () => {
  const { popularId } = useParams();
  const [libro, setLibros] = useState(null);

  useEffect(() => {
   
      const db=getFirestore();
      const items=collection(db,"products")
      getDocs(items)
      .then((snapshot)=>{
        const foundLibro = snapshot.docs.find(libro => libro.id == popularId);
        setLibros(foundLibro ? { id: foundLibro.id, ...foundLibro.data() } : null);
      })
      
   

   
  }, [popularId]);

  return (
    <main>
            <div className='div-carta'>
      {libro ? (
       <LibroIdDetail name={libro.name} img={libro.img} descripcion={libro.descripcion} precio={libro.precio} stock={libro.stock}/>
      ) : (
        <Loader/>
      )}
    </div>
    </main>

  );
};
