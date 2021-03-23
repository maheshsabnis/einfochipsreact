// the action will be used to accept 'employee' payload
// this employee payload will also be used to update the state in the store with
// schema of 'employee' payload parameter e.g. employee ={EmpNo:0, EmpName:''}

// IMP: the action will return the data after processing the payload prameter along with an output
// action
// the action can only perform 'synchronous' operations for any async operations
// use 'middlewares'
const addEmployee=(employee)=>{
    // write some logic
    employee.EmpName = employee.EmpName.toUpperCase();
    return {
        type: 'ADD_EMPLOYEE', // the output action
        employee // the output data return when the actionn isn executed 
    };
};

export default addEmployee;