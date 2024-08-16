import { useState } from "react"

export const Card = ({ nombre, foto, descripcion, like }) => {
    const [meGusta, setLike] = useState(0)
    function contador() {
        setLike(meGusta + 1)


    }

  

    return (
        <>
            <div className="flex-col m-5 w-1/4 border-4 h-15 border-black rounded bg-primary d-flex justify-content-center">
                <h4 className="text-center" >{nombre}</h4>
                <img  src={foto} alt="fotoLibro" />
                <button className="align-self-center"  onClick={contador}>
                    <img src={like} alt="meGustaLogo" />
                    <p>{meGusta}</p>
                </button>
                <p className="text-center">{descripcion}</p>
            </div>

        </>
    )

}