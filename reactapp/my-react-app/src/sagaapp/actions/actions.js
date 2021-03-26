export const getProducts=()=>{
    console.log('In get products action');
    return {
        type:'GET_PRODUCTS'
    };
};

export const saveProduct=(product)=>{
    console.log(`Data in Action ${JSON.stringify(product)}`);
    return {
        type:'SAVE_PRODUCT',
        payload:product
    };
};