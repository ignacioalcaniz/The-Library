import { LibroShow } from "./LibroShow"
import "./LibrosList.css"


export const LibrosList = ({ LibrosLocales }) => {

    const renderedBooks = LibrosLocales.map((libro) => {
        return <LibroShow key={libro.id} titulo={libro} autor={libro} imagen={libro} descripcion={libro} />

    })


    return (
        <>
            <div className="contenedor">{renderedBooks}</div>
        </>
    )
}