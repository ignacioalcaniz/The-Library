import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./ListaCategoria.css";
import { DatosContext } from "../../context/DatosContext";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { Loader } from "../../components/Loader/Loader";

export const ListaCategoria = () => {
  const { id } = useParams();
  const [libro, setLibros] = useState(null);
  const { contador, setContador, carrito, comprar, showInput, setShowInput, cantidad, handleCantidadChange } = useContext(DatosContext);

  useEffect(() => {
    const db = getFirestore();
    const items = collection(db, "libros");
    getDocs(items).then((snapshot) => {
      const foundLibro = snapshot.docs.find(libro => libro.id === id);
      setLibros(foundLibro ? foundLibro.data() : null);
    });
  }, [id]);

  return (
    <main>
      {libro ? (
        <div className="card">
          <h5 className="text-center">{libro.name}</h5>
          <h5 className="text-center">{libro.autor}</h5>
          <h5 className="text-center">{libro.categoria}</h5>
          <img className="img-lista" src={libro.img} alt={libro.name} />
          <h6 className="text-center">Precio: ${libro.precio}</h6>
          <p className="text-center">Descripción:</p>
          <p className="text-center bg-light">{libro.descripcion}</p>
          <p className="text-center">Cantidad disponible: {libro.stock}</p>

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
                setContador(contador+1)
                comprar({ id: libro.id, nombre: libro.name, img: libro.img, cantidad });
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
