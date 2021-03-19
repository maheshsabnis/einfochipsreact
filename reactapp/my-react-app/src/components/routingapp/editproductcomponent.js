import React, {useEffect, useState} from 'react';
import { HttpService } from "./../../services/httpservice";
const EditProductComponent=(props)=>{
    const [product, updateProduct]=useState({
        ProductRowId:0, ProductId:'', ProductName:'', CategoryName:'',
        Manufacturer:'', Description:'', BasePrice:0
    });
    const serv = new HttpService();
    useEffect(()=>{
        // reading the Route Parameter
        // the 'id' is read for Route Expression
        const prdrowid= props.match.params.id;
        serv.getDataById(prdrowid).then((response)=>{
            updateProduct(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    },[]);

    const save=()=>{
        // code for making ajax class to create a new Product
        // on success of creating product navigate to the ProductList
        
        // the 'history' is an object of teh partent 
        // that contians an information of
        // routing navigation
        // the push() method will accept the url to navigate and it
        // will be saved in history() object to that
        // the Router.Provider will have knowledge of routing
        props.history.push("/");
        // if product creation fialed go to error page
    };

    // load the product to be edited
    return(
        <div className="container">
          <h2>Edit Product</h2>
          {
              JSON.stringify(product)
          }
          <input type="button" value="Save" className="btn btn-success" onClick={save}/>
        </div>
    );
};

export default EditProductComponent;