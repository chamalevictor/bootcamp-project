import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';


const prodTest = {
  nombre: "Victor",
  edad: 30,
  dpi: 2076941760101
};
const prodTest2 = {
  nombre: "Joel",
  edad: 30,
  dpi: 2076941760101
};

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      
     <h1>here we are</h1>
     <Product props={prodTest}/>
     <Product props={prodTest2}/>
      </header>
      
    </div>
  );
}

export default App;
