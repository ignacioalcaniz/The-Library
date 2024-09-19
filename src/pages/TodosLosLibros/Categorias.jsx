import "./Categorias.css";
import { Link } from "react-router-dom";
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Loader } from "../../components/Loader/Loader";
import { useState, useEffect } from "react";


export const Categorias = () => {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const librosCollection = collection(db, "libros");
            const librosSnapshot = await getDocs(librosCollection);
            const librosData = librosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

          
            setLibros( librosData);
            setLoading(false); 
        };

        fetchData();
    }, []);

    return (
        <main >
            <h4 className="text-6xl text-center bg-primary m-2 rounded">OTROS LIBROS:</h4>
            {loading ? (
                <Loader />
            ) : (
                <div className="contenedorLibros">
                    {libros.map((libro) => (
                        <div key={libro.id} className="card">
                            <h1 className='text-center'>{libro.name}</h1>
                            <h2 className='text-center'>{libro.autor}</h2>
                            <img className='img-carta' src={libro.img} alt="cover-img" />
                            <p className="text-center">${libro.precio}</p>
                            <button className="boton-info">
                                <Link to={`/TheLibrary/OtroLibros/${libro.id}`}>DETALLES:</Link>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
};
