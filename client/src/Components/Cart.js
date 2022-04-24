import { useSelector } from 'react-redux';

function Cart(){
    const cartItems = useSelector(state=>state.cartItems);
    if(cartItems.length===0) return (<p className="text-center w-responsive mx-auto mb-5">
        El carrito se encuentra vacío
    </p>);
    else{
    return(
        <p className="text-center w-responsive mx-auto mb-5">Hay {cartItems.length} elementos en el carrito </p>
    );}
};

export default Cart;