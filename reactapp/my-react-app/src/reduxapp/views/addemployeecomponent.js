import React, {useState} from 'react';


const AddEmployeeComponent=(props)=>{
    const [emp, updateEmp] = useState({EmpNo:0,EmpName:''});

    const save=()=>{
        props.AddAction(emp);
    };

    const clear=()=>{
        updateEmp({EmpNo:0,EmpName:''});
    };

    return(
        <div className="container">
    
            <div className="form-group">
            <label>EmpNo</label>   
                <input type="text" value={emp.EmpNo} className="form-control"
                    name="EmpNo" onChange={(evt)=>updateEmp({...emp, EmpNo:parseInt(evt.target.value)})}/>
              
            </div>
            <div className="form-group">
            <label>EmpName</label>   
                <input type="text" value={emp.EmpName} className="form-control"
                    name="EmpName" onChange={(evt)=>updateEmp({...emp, EmpName:evt.target.value})}/>
               
            </div>
            <div className="form-group">
              <input type="button" value="Save" onClick={save}
                />
              <input type="button" value="Clear" onClick={clear}/>

            </div>
         
    </div>
    );
};

export default AddEmployeeComponent;