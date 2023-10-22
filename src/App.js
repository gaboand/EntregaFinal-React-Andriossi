import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';
import CheckoutComponents from './components/Checkout/CheckoutComponents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<CheckoutComponents />}/>
            <Route path='*' element={<h1>404 NOT FONUD </h1>}/>
          </Routes>
        </CartProvider>
          <Info/>
      </BrowserRouter>
          <Footer/>
    </div>
  );
}

export default App;
