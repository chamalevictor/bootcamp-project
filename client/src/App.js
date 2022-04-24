import './Components/clientCSS.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import ContactUs from './Components/ContactUs';
import Cart from './Components/Cart';

export const prodTest = {
  img:"./img/2S1560.jpg",
  model: "2S1560",
  height: 70,
  large1: 160,
  depth: 60,
  description: "Escritorio tipo industrial con doble estante",
  price: "1500.00"
};
export const prodTest2 = {
  nombre: "Joel",
  edad: 30,
  dpi: 2076941760101
};

function App() {

  return (
    
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        </Routes>       
    </BrowserRouter>    
    </div>
    
  );
}

export default App;
