import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { HttpService } from "./../../services/httpservice";

const ListProductComponent=()=>{
    const [products, updateProducts] = useState([]);
    const serv = new HttpService();
    const columns = ["ProductRowId", "ProductId", "ProductName","CategoryName","Manufacturer","Description","BasePrice"];
    useEffect(()=>{
        serv.getData().then((response)=>{
            updateProducts(response.data);
        }).catch((error)=>{
            console.log(`Error`);
        });
       return ()=>{
           console.log('Current COmponent Execution has been c  ompleted');
       } 
    },[]);
    return (
        <div className="container">
          <h2>The Product List</h2>
          <table className="table table-bordered table-striped">
          <thead>
             <tr>
              {
                columns.map((header,index)=>(
                      <th key={index}>{header}</th>
                  ))
              }
             </tr>
          </thead>
          <tbody>
          {
            products.map((row, idx)=>(
                  <tr key={idx} >
                     {
                      columns.map((header,index)=>(
                          <td key={index}>{row[header]}</td>
                      ))
                     }
                     <td>
                     <button className="btn btn-warning">
                     <Link to={`/edit/${row.ProductRowId}`}>Edit Product</Link>
                   </button>
                     </td>
                    
                  </tr>
              ))
          }
          </tbody>
        </table>
        </div>
    );
};

export default ListProductComponent;