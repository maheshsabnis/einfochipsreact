import React from 'react';
// props: the object that will have an access to the
// 'props' from the parent i.e. BrowserRouter
const CreateProductComponent=(props)=>{


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

    return(
        <div className="container">
          <h2>Create Product</h2>
          
          <input type="button" value="Save" className="btn btn-success"
           onClick={save}/>
        </div>
    );
};

export default CreateProductComponent;