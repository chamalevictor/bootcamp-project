import Product from "./Product";
import {prodTest} from "../App";
import {prodTest2} from "../App";

function Products(){
    return(
        <div className="col-xs-1 text-center">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Nuestros Escritorios</h2>
            <Product props={prodTest}/>
            <Product props={prodTest}/>
            <Product props={prodTest}/>
        </div>
    );
};

export default Products;