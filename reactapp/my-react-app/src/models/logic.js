export class Logic {
    constructor(){
        this.employees =[];
        this.employees.push({EmpNo:101, EmpName:'Mahesh', DeptName:'IT', Designation:'Manager', Salary:90000});
        this.employees.push({EmpNo:102, EmpName:'Tejas', DeptName:'HRD', Designation:'Lead', Salary:80000});
        this.employees.push({EmpNo:103, EmpName:'Mukesh', DeptName:'SALES', Designation:'Engineer', Salary:70000});
    }

    getEmployees(){
        return this.employees;
    }

    addEmployees(emp){
        this.employees.push(emp);
        return this.employees;
    }
}