const prodTest = {
    nombre: "Victor",
    edad: 30,
    dpi: 2076941760101
  };
  

const initialState = {
    items: [],
    count: 0,
    nombre: "",
    edad: 0,
    dpi: 0
}

 const RootReducer  = (state = initialState, action) => {
     switch (action.type){
            case 'ADD':
              
                return{
                    ...state,
                    items: state.items+prodTest,
                    count: state.count+1
                    
                };
                
                case 'REMOVE':
                return{
                    ...state,
                    items: state.items-1
                };
            default:
             return state;
     };
     
 };

 export default RootReducer;