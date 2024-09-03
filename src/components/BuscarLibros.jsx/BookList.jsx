import { BookShow } from "./BookShow"
import "./BookList.css"

export const BookList=({books})=>{


    const renderedBook=books.map((book)=>{
       return <BookShow key={book.id} title={book} image={book}
       descripcion={book}

       />
    })


    return(
        <>
        
         <div className="book-carta" >
            {renderedBook}
            </div>
        </>
       
            
    
    )
}


