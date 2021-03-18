import React, {useState,useEffect} from 'react';
import { DataContext } from "./datacontext";
import TableContextComponent from './tableContextComponent';
import { HttpService } from "./../services/httpservice";

const UseEffectAjaxComponent=()=>{
    const [products, getProducts] = useState([]);
    const serv = new HttpService();
    useEffect(()=>{
        serv.getData().then((response)=>{
            getProducts(response.data);
        }).catch((error)=>{
            console.log(`Error ${error.message}`);
        });
    },[]); // empty array dependency parameter to indicate that the state is updated 


    return(
        <div className="container">
            <DataContext.Provider value={products}>
               <TableContextComponent></TableContextComponent>
            </DataContext.Provider>
        </div>
    );
};

export default UseEffectAjaxComponent;