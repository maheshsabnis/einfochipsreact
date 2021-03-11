import React, { Component } from 'react';
import { Logic } from "./../../models/logic";
import { Departments,Designations } from "./../../models/constants";
// impport other component
import DropDownComponent from './../reusablecomponents/dropdowncomponent';
import  DataTableComponent  from "./../reusablecomponents/datatablecomponent";
class EmployeeComponent extends Component {
      constructor(props){
          super(props);
          this.state = {
                EmpNo:0,
                EmpName:'',
                DeptName:'',
                Designation:'',
                Salary:0,
                departments:Departments, // values from comstanats
                designations:Designations, // values from comstanats
                employees:[],
                canShow:false
          };
          this.logic =new Logic();

      }  
     
      componentDidMount(){
        this.setState({employees: this.logic.getEmployees()},()=>{
              console.log(`In ctor ${JSON.stringify(this.state.employees)}`);
        });
      }
      

    handleInputChanges(evt){
        this.setState({[evt.target.name]:evt.target.value});
    }  
    clear(){
        this.setState({EmpNo:0});
        this.setState({EmpName:''});
        this.setState({DeptName:''});
        this.setState({Designation:''});
        this.setState({Salary:0});
    }
    save(){
        let emp = {
            EmpNo:this.state.EmpNo,
            EmpName:this.state.EmpName,
            DeptName: this.state.DeptName,
            Designation:this.state.Designation,
            Salary:this.state.Salary
        };
        // temp array
        // this will have same schema as the employees array
        let temparray = this.state.employees.slice();
        temparray.push(emp);
        console.log(`temparray are ${JSON.stringify(temparray)}`);
        // set the state for the array
        this.setState({employees:temparray});
        // cannot mutate the state property directly
        //this.state.employees.push(emp);
        console.log(`EMployees are ${JSON.stringify(this.state.employees)}`);
    }

    getSelectedDeptName(val){
        this.setState({DeptName:val});
    }
    getSelectedDesignation(val){
        this.setState({Designation:val});
    }
    getSelectedEmployee(e){
        this.setState({EmpNo:e.EmpNo});
        this.setState({EmpName:e.EmpName});
        this.setState({DeptName:e.DeptName});
        this.setState({Designation:e.Designation});
        this.setState({Salary:e.Salary});
    }
    render() { 
        return ( 
            <div className="container">
                <div className="form-group">
                   <label>EmpNo</label>   
                   <input type="text" value={this.state.EmpNo} className="form-control"
                    name="EmpNo" onChange={this.handleInputChanges.bind(this)}/>
                </div>
                <div className="form-group">
                   <label>EmpName</label>   
                   <input type="text" value={this.state.EmpName} className="form-control"
                    name="EmpName" onChange={this.handleInputChanges.bind(this)}/>
                </div>
                <div className="form-group">
                   <label>DeptName</label>   
                   <DropDownComponent dataSource={this.state.departments}
                     stateProperty={this.state.DeptName}
                     selectedValue={this.getSelectedDeptName.bind(this)}/>
                   {/*

                     key is used when the DOM is generate dynamically
                         this is the identotfication of element in Virtual DOM
                   <select value={this.state.DeptName} className="form-control"
                    name="DeptName" onChange={this.handleInputChanges.bind(this)}>
                        
                        {
                           
                            this.state.departments.map((dept,idx)=>(
                                <option key={idx} value={dept}>{dept}</option>
                            ))
                        }
                    </select> */}
                </div>
                <div className="form-group">
                   <label>Designation</label>   
                   <DropDownComponent dataSource={this.state.designations}
                     stateProperty={this.state.Designation}
                     selectedValue={this.getSelectedDesignation.bind(this)}/>
                  {/* <select value={this.state.Designation} className="form-control"
                    name="Designation" onChange={this.handleInputChanges.bind(this)}>
                         {
                           
                           this.state.designations.map((desig,idx)=>(
                               <option key={idx} value={desig}>{desig}</option>
                           ))
                       }
                    </select>*/}
                </div>
                <div className="form-group">
                   <label>Salary</label>   
                   <input type="text" value={this.state.Salary} className="form-control"
                    name="Salary" onChange={this.handleInputChanges.bind(this)}/>
                </div>
                <div className="form-group">
                  <input type="button" value="Clear" className="btn btn-warning"
                   onClick={this.clear.bind(this)}/>
                  <input type="button" value="Save" className="btn btn-success"
                  onClick={this.save.bind(this)}/>
                </div>
                <br/>
                <div className="container" >
                       <DataTableComponent
                       DataSource={this.state.employees}
                       selectedRowValue={this.getSelectedEmployee.bind(this)}
                       canDelete={true}></DataTableComponent>
                </div>       
            </div>
        );
    }
}
 
export default EmployeeComponent;