import React, {useState} from 'react'

// impporting DataContext
import { DataContext } from "./datacontext";

import ListComponent from './listcomponent';
import TableContextComponent from './tableContextComponent';
import TableContextEventComponent from "./tableContextEventComponent";

const StateComponent=()=>{
    // the dept is the state property which is an object with proeprties
    // defined using useState() i.e. DeptNo, DeptName, Location 
    const [dept, updateDept] =useState({DeptNo:0,DeptName:'', Location:''});
    // the state property of the type array 
    const [depts, addDept] = useState([]);
    const locations = ['Pune', 'Mumbai', 'Vadodara', 'Ahmedabad'];

    const save=()=>{
        // mutate the 'depts' array using the data from the dept object
        addDept([...depts, dept]);
    };

    const clear=()=>{
        updateDept({DeptNo:0,DeptName:'', Location:''});
    };


    return (
        <div className="container">
          <div className="form-group">
            <label>DeptNo</label>
            {/* updateDept({...dept, DeptNo:parseInt(evt.target.value)}) 
           means update the same 'dept' object with its DeptNo property using 
           value entered into text element
        */}
            <input type="text" className="form-control" value={dept.DeptNo}
             onChange={(evt)=> updateDept({...dept, DeptNo:parseInt(evt.target.value)})}/>
          </div>
          <div className="form-group">
            <label>DeptName</label>
            <input type="text" className="form-control" value={dept.DeptName}
            onChange={(evt)=> updateDept({...dept, DeptName:evt.target.value})}/>
          </div>
          <div className="form-group">
          <label>Location</label>

           <ListComponent stateProp={dept.Location}
           dataSource={locations}
           emitValue={(data)=>updateDept({...dept, Location:data})}></ListComponent> 


         {/* <select className="form-control" value={dept.Location}
          onChange={(evt)=> updateDept({...dept, Location:evt.target.value})}>
            {
                locations.map((loc,idx)=>(
                    <option key={idx} value={loc}>{loc}</option>
                ))
            }
          </select>
        */}

        </div>
        <div className="form-group">
         <input type="button" value="Save" className="btn btn-success" onClick={save}/>
         <input type="button" value="Clear" className="btn btn-warning" onClick={clear}/>
        </div>
        <hr/>
        <div className="container">
          {/* Providing 'depts' as 'value' of Context */}
          <DataContext.Provider value={depts}>
            <TableContextComponent></TableContextComponent>
          </DataContext.Provider>
        </div>
         <hr/>
         <h4>Passing data and Callback using context so that event from child can be listened</h4>
         {/* Passing array and  callback. This callback
          will be used to subscribe to event emitted by child component*/}
         <DataContext.Provider value={{depts, updateDept}}>
          <TableContextEventComponent></TableContextEventComponent>
        </DataContext.Provider>
        </div>
    );

};


export default StateComponent;