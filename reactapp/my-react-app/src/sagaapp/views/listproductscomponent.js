import React from 'react';
import {DataContext} from './../../hooks/datacontext';
import TableContextComponent from './../../hooks/tableContextComponent';
import { connect } from "react-redux";

const ListProductsComponent=({products})=>
    products? (
        <div className="container">
            <DataContext.Provider value={products}>
              <TableContextComponent></TableContextComponent>
            </DataContext.Provider>
        </div>
    ):null;

// mapStateProps wioll be used to map the 'state' from the 'store'
// to 'props' of the current component
const mapStateToProps=(state) =>({
    // props:the 'products' state from the 'store'
    products:state.products
});

export default connect(mapStateToProps,null)(ListProductsComponent);