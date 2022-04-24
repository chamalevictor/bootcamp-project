import { useDispatch } from "react-redux";
import DS1560 from '../img/DS1560.jpg';
import './clientCSS.css';


function Product({props}){
    const dispatch = useDispatch();
    const addToCart = () => dispatch({type:'ADD'});
    
    return(
        <div className="card" style={{width: '18rem'}}>
        <img src={DS1560} className="card-img-top" alt="desk.jpg"/>
        <div className="card-body">
        <h5 className="card-title"><strong>Modelo {props.model}</strong></h5>
        <p className="card-text"><strong>Medidas: </strong>{props.height}cm * {props.large1}cm * {props.depth}cm</p>
        <p className="card-text"><strong>Precio:</strong> Q{props.price}</p>
        <p className="card-text"><strong>Descripcion:</strong> {props.description}</p>
        <a onClick={addToCart} className="btn btn-primary">Agregar al Carrito</a>
  </div>
</div>

    )};

export default Product;