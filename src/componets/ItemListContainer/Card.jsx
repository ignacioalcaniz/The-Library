export const Card = ({ nombre, foto, descripcion }) => {
    return (
        <>
            <div className="flex-col m-5 w-1/4 border-4 h-15 border-black rounded">
                <h4 className="text-center" >{nombre}</h4>
                <img src={foto} alt="" />
                <p>{descripcion}</p>
            </div>

        </>
    )

}