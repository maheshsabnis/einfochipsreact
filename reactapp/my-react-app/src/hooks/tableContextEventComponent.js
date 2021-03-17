import React, {useContext} from 'react';

// import the COntext
import { DataContext } from "./datacontext";

const TableContextEventComponent=()=>{
  // subscribe to the Context to read the data
  const consumeValue = useContext(DataContext);
  // consmeValue={{collection,callback}};

  // read the first key from the DataContext
  const collection = consumeValue[Object.keys(consumeValue)[0]]; // read array

  // read the callback
  const callback = consumeValue[Object.keys(consumeValue)[1]]; // function for dispatchAction

  if(collection === undefined || collection.length ===0){
      return (
          <div> No Records</div>
      );
  } else {
      // process the values received from Context
      let columns = Object.keys(collection[0]);
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
             collection.map((row, idx)=>(
                  <tr key={idx}  onClick={()=>callback(row)}>
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

export default TableContextEventComponent;