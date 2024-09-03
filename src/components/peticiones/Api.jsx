import axios from "axios"


export const Api = async (libro) => {
    const response = await axios.get("https://www.googleapis.com/books/v1/volumes",{
        
        

       
      
        params:{
            q:libro,
             Key: "AIzaSyADs4zKoUyDTnuLNJdZ6dUFF3LOcSfILcs"
            
            
        }
     
        
    
       
    }
)
   return response.data.items

 
    

   
   
}





