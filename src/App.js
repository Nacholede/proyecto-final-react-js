import ItemListContainer from "./components/itemList/ItemListContainer"
import NavBar from "./components/NavBar/navBar";

function App() {
const styleH3 = {backgroundColor: "blue",  color: "white"}
let titulo = <h1 style={styleH3}> Tienda Retrostore  </h1>; 

  return (
    <div className="App">
      <header className="App-header">
        <NavBar /> 
          {titulo}
         <ItemListContainer greeting="Hola!"/>
         
      </header>
    </div>
  );
}

export default App;
