import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import ContactUs from './Components/ContactUs';

export const prodTest = {
  nombre: "Victor",
  edad: 30,
  dpi: 2076941760101
};
export const prodTest2 = {
  nombre: "Joel",
  edad: 30,
  dpi: 2076941760101
};

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">      
     <h1>here we are</h1>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home />}> Home </Route>
       <Route path="/products" element={<Products />}> Products </Route>
       
     </Routes>
      
      </header>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
