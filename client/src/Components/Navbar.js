
import React from 'react';
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Home';
import Products from './Products';
import ContactUs from './ContactUs';


function Navbar(){
    const count = useSelector(state => state.count);
    return(

            <div>

                <p>Cart</p>
                <p>Articulos: {count}</p>
                <button>Ver Carrito</button>
            </div>
        
    );
};

export default Navbar;