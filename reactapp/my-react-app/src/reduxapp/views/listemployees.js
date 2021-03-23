import React from 'react'

const ListEmployeesComponent=(props)=>{
    if(props.employeeList === undefined || props.employeeList.lenghh ===0) {
        return (
            <div className="container">
               No records is Store
            </div>
        );
    } else {
      return ( <div className="container">
        <table className="table table-bordered table-striped table-dark">
            <thead>
              <tr>
                <td>EmpNo</td>
                <td>EmpName</td>
              </tr>
            </thead>
            <tbody> 
                {
                   props.employeeList.map((emp,idx)=>(
                       <tr key={idx}>
                           <td>{emp.employee.EmpNo}</td>
                           <td>{emp.employee.EmpName}</td>
                       </tr>
                   ))
                }
            </tbody>
        </table>
       </div>)
    }
};

export default ListEmployeesComponent;