import { categoriasLibros } from "../../components/arrayLibros";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./ListaCategoria.css";

export const ListaCategoria = () => {
  const { libroId } = useParams();
  const resultadoFind = categoriasLibros.find((libro) => libro.id == libroId);

  
  const [showInput, setShowInput] = useState(false);
  const [cantidad, setCantidad] = useState(0); 

  const { nombre, autor, categoria, imagen, descripcion, precio, cantidad: stock } = resultadoFind;

  
  const handleCantidadChange = (e) => {
    setCantidad(e.target.value);
  };


  const handleComprar = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    
    carrito.push({
      id: resultadoFind.id,
      nombre,
      autor,
      precio,
      cantidad: Number(cantidad), 
    });

  
    localStorage.setItem('carrito', JSON.stringify(carrito));

    
    setShowInput(false);
  };

  return (
    <main>
      <div className="card">
        <h5 className="text-center">{nombre}</h5>
        <h5 className="text-center">{autor}</h5>
        <h5 className="text-center">{categoria}</h5>
        <img className="img-lista" src={imagen} alt="" />
        <h6 className="text-center">Precio: ${precio}</h6>
        <p>{descripcion}</p>
        <p className="text-center">Cantidad disponible: {stock}</p>
        
        {!showInput ? (
          <button
            className="boton-lista"
            onClick={() => setShowInput(true)}
          >
            <img src="https://i.ibb.co/rxP7CwT/carrito-de-compras-2.png" alt="" />
          </button>
        ) : (
          <div className="input-container">
            <input
              type="number"
              min="1"
              value={cantidad}
              onChange={handleCantidadChange}
            />
            <button onClick={handleComprar}>Comprar</button>
          </div>
        )}
      </div>
    </main>
  );
};