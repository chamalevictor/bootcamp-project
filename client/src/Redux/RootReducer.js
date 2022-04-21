const initialState = {
    items: 0,
    nombre: "",
    edad: 0,
    dpi: 0
}

 const RootReducer  = (state = initialState, action) => {
     switch (action.type){
            default:
             return state;
     };

 };

 export default RootReducer;