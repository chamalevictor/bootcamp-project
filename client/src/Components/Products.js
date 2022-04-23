import Product from "./Product";
import {prodTest} from "../App";
import {prodTest2} from "../App";

function Products(){
    return(
        <div>
            This is the Products page.
            <Product props={prodTest}/>
            <Product props={prodTest2}/>
            <Product props={prodTest2}/>
        </div>
    );
};

export default Products;