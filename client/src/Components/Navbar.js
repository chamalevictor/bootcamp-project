
import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar(){
    const count = useSelector(state => state.count);
    return(
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Home</Link>
    <Link className="navbar-brand" to='/products'>Productos</Link>
    <Link className="navbar-brand" to='/contactus'>Contáctenos</Link>
    <Link to='/Cart'><button className="btn btn-outline-success" type="submit">Carrito {count}</button></Link>
  </div>
</nav>
            
        
    );
};

export default Navbar;