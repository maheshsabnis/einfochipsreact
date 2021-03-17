import React, {useContext} from 'react';

// import the COntext
import { DataContext } from "./datacontext";

const TableContextComponent=()=>{
  // subscribe to the Context to read the data
  const consumeValue = useContext(DataContext);

  if(consumeValue === undefined || consumeValue.length ===0){
      return (
          <div> No Records</div>
      );
  } else {
      // process the values received from Context
      let columns = Object.keys(consumeValue[0]);
      return(
        <div className="container">
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
             consumeValue.map((row, idx)=>(
                  <tr key={idx} >
                     {
                      columns.map((header,index)=>(
                          <td key={index}>{row[header]}</td>
                      ))
                     }
                  </tr>
              ))
          }
          </tbody>
        </table>
      </div>
      );
  }
};

export default TableContextComponent;