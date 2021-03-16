import React from 'react';

const ListComponent=(props)=>{

    const handleChange=(v)=>{
        props.emitValue(v);
    };

    if(props.dataSource === undefined || props.dataSource.length === 0) {
        return (
            <div className="container">
              <strong>
                No Records
              </strong>
            </div>
        );
    } else {
    return (
        <select className="form-control"
         value={props.stateProp}
          onChange={(evt)=>{handleChange(evt.target.value)}}>
           {
               props.dataSource.map((d,i)=>(
               <option key={i} value={d}>{d}</option>
           ))
        }
         </select>    
    );}
};

export default ListComponent;