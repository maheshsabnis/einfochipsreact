import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import AddEmployeeComponent from './views/addemployeecomponent';
import ListEmployeesComponent from './views/listemployees';

import addEmployee from './actoins/actions';


const MainReduxComponent=()=>{

    // initialize the dispatch to displatch action
    let dispatch = useDispatch();
    // using selector query to the store
    // read data from store 
    let employees = useSelector(state=>state.listEmployeesReducer);
    return (
        <div className="container">
        <h1>The Redux Application</h1>
            <AddEmployeeComponent AddAction={(employee)=>dispatch(addEmployee(employee))}></AddEmployeeComponent>
            <hr/>
            <ListEmployeesComponent
             employeeList={employees}></ListEmployeesComponent>
        </div>
    );
};

export default MainReduxComponent;
