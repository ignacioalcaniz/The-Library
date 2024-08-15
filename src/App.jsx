import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ItemListContainer } from "./componets/ItemListContainer/ItemListContainer";
import { NavBar } from "./componets/NavBar/NavBar";
import { Title } from "./componets/Title/Title";



function App() {
    return(

        <>
        <Title/>
        <NavBar/>
        <ItemListContainer/>
        </>
    )
   
        
        

     
    
}
export default App;