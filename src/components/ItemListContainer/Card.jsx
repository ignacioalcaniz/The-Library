import { useState} from "react"
import "./Card.css"

export const Card = ({ nombre, foto, descripcion, boton }) => {
    const [meGusta, setLike] = useState(0)
    function contador() {
        setLike(meGusta + 1)

    }



    return (
        <>
            <div className="flex-col m-5 w-1/4 border-4 h-15 border-black rounded bg-primary d-flex justify-content-center">
                <h4 className="text-center" >{nombre}</h4>
                <img  src={foto} alt="fotoLibro" />
                <button className="align-self-center"><a href=""><img src="./img/carrito.png" alt="" /></a></button>
                <button className="align-self-center"  onClick={contador}>
                    <img src={boton} alt="meGustaLogo" />
                    <p>{meGusta}</p>
                </button>
                <p className="text-center p-card">{descripcion}</p>
            </div>

        </>
    )

}