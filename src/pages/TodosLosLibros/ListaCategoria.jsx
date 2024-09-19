import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./ListaCategoria.css";
import { DatosContext } from "../../context/DatosContext";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { Loader } from "../../components/Loader/Loader";
import { ListaCategoriaDetail } from "./ListaCategoriaDetail";

export const ListaCategoria = () => {
  const { id } = useParams();
  const [libro, setLibros] = useState(null);
  const { contador, setContador, comprar, showInput, setShowInput, cantidad, handleCantidadChange } = useContext(DatosContext);

  useEffect(() => {
    const db = getFirestore();
    const items = collection(db, "libros");
    getDocs(items).then((snapshot) => {
      const foundLibro = snapshot.docs.find(libro => libro.id === id);
      setLibros(foundLibro ? { id: foundLibro.id, ...foundLibro.data() } : null);
    });
  }, [id]);

  return (
    <main>
      {libro ? (

        <div key={libro.id} className="card">
        <ListaCategoriaDetail name={libro.name}autor={libro.autor} categoria={libro.categoria} img={libro.img} precio={libro.precio}descripcion={libro.descripcion} stock={libro.stock} />
          {!showInput ? (
            <button className="boton-lista" onClick={() => setShowInput(true)}>
              <img src="https://i.ibb.co/rxP7CwT/carrito-de-compras-2.png" alt="Agregar al carrito" />
            </button>
          ) : (
            <div className="input-container">
              <input
                className="input-cantidad"
                type="number"
                min="1"
                max={libro.stock}
                value={cantidad}
                onChange={handleCantidadChange}
              />
              <button onClick={() => {
                setContador(contador + 1)

                comprar({ id: libro.id, nombre: libro.name, img: libro.img, cantidad, descripcion: libro.descripcion, precio: libro.precio });
                setShowInput(false);
              }} >
                Comprar
              </button>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </main>
  );
};
