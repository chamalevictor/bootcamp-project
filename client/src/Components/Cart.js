import { useSelector } from 'react-redux';

function Cart(){
    const cartItems = useSelector(state=>state.cartItems);
    if(cartItems.length===0) return (<p>el carrito esta vacio</p>);
    else{
    return(
            <p>Hey</p>
    );}
};

export default Cart;