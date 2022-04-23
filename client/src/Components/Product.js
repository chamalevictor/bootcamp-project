import { useDispatch } from "react-redux";
import DS1560 from '../img/DS1560.jpg';
import './clientCSS.css';


function Product({props}){
    const dispatch = useDispatch();
    const addToCart = () => dispatch({type:'ADD'});
    
    return(
        <div className="product">
            <img src={DS1560} alt="desk loading"/>
            <ul>
                <li>{props.nombre}</li>
                <li>{props.edad}</li>
                <li>{props.dpi}</li>                
            </ul>
            <button onClick={addToCart}>agregar al carrito</button>
        </div>
    );
};

export default Product;