import React from 'react'

import { getProducts } from "./../actions/actions";
import { saveProduct } from "./../actions/actions";
import { connect } from "react-redux";

export const GetProductsComponent=(props)=>{
    return (
        <div className="container">
            <h2>The List of Products</h2>
            <button className="btn btn-primary"
             onClick={props.getProductsData}
            >Get Products</button>
            <hr/>
            {/* Pass the Input data */}
            <button className="btn btn-success"
            onClick={()=>props.saveProductData({
                ProductRowId:0,
                ProductId: 'Prd9009',
                ProductName: 'Bottle',
                CategoryName: 'Home',
                Manufacturer: 'Bajaj',
                Description: '1 littre',
                BasePrice:100
            })}
           >Save Product</button>
           <hr/>
           <div className="container">
             Newly Created Product = {JSON.stringify(props.newproduct)}
           </div>
        </div>
        );
        
};

// Traditionaly the React-Redux App uses the 'connect()'
// mapDispatchToProps, will be used to map the action method with the 'props'
// the 'props.getProductsData' will be bound with onClick event binding
const mapDispatchToProps = {
    // props:action-name
    getProductsData:getProducts,
    saveProductData:saveProduct
};

const mapStateToProps =state=>(
   { newproduct:state.product }
);
// map the react component with redux store

export default connect(mapStateToProps, mapDispatchToProps)(GetProductsComponent);


 