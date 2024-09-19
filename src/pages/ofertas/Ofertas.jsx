import "./Ofertas.css"
import { collection, getDocs, getFirestore,query,where } from 'firebase/firestore';
import { useState,useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';


export const Ofertas=()=>{
    const[libro,setLibros]=useState([])
    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const librosCollection = collection(db, "libros");
            const q = query(librosCollection, where("precio", "<", 15000));
            const librosSnapshot = await getDocs(q);
            const librosData = librosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setLibros( librosData);
             
        };

        fetchData();
    }, []);

    return(
        <main className='row '>
             <h4 className="text-6xl text-center bg-primary m-2 rounded">OFERTAS:</h4>

             {libro.length > 0 ? (
                libro.map((libro) => (
                    <div key={libro.id} className="card">
                        <h5 className="text-center">{libro.name}</h5>
                        <h5 className="text-center">{libro.autor}</h5>
                        <h5 className="text-center">{libro.categoria}</h5>
                        <img className="img-lista" src={libro.img} alt={libro.name} />
                        <h6 className="text-center">Precio: ${libro.precio}</h6>
                        <p className="text-center">Descripción:</p>
                        <p className="text-center bg-light">{libro.descripcion}</p>
                        <p className="text-center">Cantidad disponible: {libro.stock}</p>
                        <button className=" boton-ofertas" > <img className="img-ofertas" src="https://i.ibb.co/rxP7CwT/carrito-de-compras-2.png" alt="Agregar al carrito" /></button>
                    </div>
                ))
            ) : (
                <Loader />
            )}
        </main>
         

        
    )
  
}