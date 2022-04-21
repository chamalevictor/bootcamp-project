
function Product({props}){
    return(
        <div>
            <ul>
                <li>{props.nombre}</li>
            </ul>
            <ul>
                <li>{props.edad}</li>
            </ul>
            <ul>
                <li>{props.dpi}</li>
            </ul>
        </div>
    );
}

export default Product;