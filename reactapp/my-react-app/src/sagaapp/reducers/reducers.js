// usng new ES 6 syntax for creating reducer as a single object

 

// initialState and action as input parameters and returns modified or finalState
const reducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_PRODUCTS':
             return {...state};   
        case 'GET_PRODUCTS_SUCCESS':
             // if the action execution is successfull, then return 'producs' array
             // this succsess action will be returned by 'saga middleware' 
             return {...state, products:action.products};        
        case 'SAVE_PRODUCT':
             return {...state};
        case 'SAVE_PRODUCT_SUCCESS':
             // if the action execution is successfull, then return 'produc' object
             // this succsess action will be returned by 'saga middleware' 
             return {...state, product:action.product};                 
        default:
            // returning the default state
            return state;
    }
};

export default reducer;