
import { useSelector } from 'react-redux';


function Navbar(){
    const count = useSelector(state => state.items);
    return(
        <header>
            <div>
                <p>Cart</p>
                <p>current items: {count}</p>
            </div>
        </header>
        
    );
};

export default Navbar;