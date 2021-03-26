import React from 'react';
import GetProductsComponent from './views/getproductscomponent';
import ListProductsComponent from './views/listproductscomponent';
const MainSagaComponent=()=>{
    return (
        <div className="container">
            <GetProductsComponent></GetProductsComponent>
            <hr/>
            <ListProductsComponent></ListProductsComponent>
        </div>
    );
};

export default MainSagaComponent;