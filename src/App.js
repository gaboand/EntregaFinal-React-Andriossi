import './App.css';
import  './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer gretting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
