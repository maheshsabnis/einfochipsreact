import React from 'react';
import { Route,Link,Switch,Redirect } from "react-router-dom";
import CreateProductComponent from './createproductcomponent';
import EditProductComponent from './editproductcomponent';
import ListProductComponent from './listproductscomponent';

const MainRoutingComponent=()=>{

    return(
        <div className="container">
            <h1>The React.js Routing App</h1>
            <table className="table table-bordered table-striped table-dark">
                <tbody>
                  <tr>
                    <td>
                        <Link to="/">Product List</Link>
                    </td>
                    <td>
                      <Link to="/create">Create Product</Link>
                    </td>
                   
                  </tr>
                </tbody>
            </table>
            {/* Define a Route Table */}
            <div>
             <Switch>
                <Route exact path="/" component={ListProductComponent} ></Route>
                <Route exact path="/create" component={CreateProductComponent}></Route>
                <Route exact path="/edit/:id" component={EditProductComponent}></Route>
                {/* The Default route if expression does not match */}
                <Redirect to="/"/>
             </Switch>
            </div>
        </div>
    );
};

export default MainRoutingComponent;