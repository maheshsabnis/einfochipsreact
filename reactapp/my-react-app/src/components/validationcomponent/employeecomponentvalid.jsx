import React, { Component } from 'react'
class EmployeeValidationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            EmpNo:0,
            EmpName:'',
            isEmpNoValid:true,
            isEmpNameValid:true,
            isFormValid:false
         };

    }

    handleInputChanges(evt){
        this.setState({[evt.target.name]:evt.target.value});
        this.vaidateForm(evt.target.name,evt.target.value);
    }  

    vaidateForm=(name,value)=>{
        if(name === "EmpNo"){
            if(parseInt(value) <= 0) {
                this.setState({isEmpNoValid:false});
                this.setState({isFormValid:false});
            } else {
                this.setState({isEmpNoValid:true});
                this.setState({isFormValid:true});
            }
        }
        if(name ===  "EmpName") {
            if(value.length < 6 || value.length > 20) {
                this.setState({isEmpNameValid:false});
                this.setState({isFormValid:false});
            } else {
                this.setState({isEmpNameValid:true});
                this.setState({isFormValid:true});
            }
        }

    }

    render() { 
        return (  

        <div className="container">
            <form> 
                <div className="form-group">
                <label>EmpNo</label>   
                    <input type="text" value={this.state.EmpNo} className="form-control"
                        name="EmpNo" onChange={this.handleInputChanges.bind(this)}/>
                    <div className="alert alert-danger"
                     hidden={this.state.isEmpNoValid}>
                        The EmpNo is must
                    </div>
                </div>
                <div className="form-group">
                <label>EmpName</label>   
                    <input type="text" value={this.state.EmpName} className="form-control"
                        name="EmpName" onChange={this.handleInputChanges.bind(this)}/>
                    <div className="alert alert-danger"
                        hidden={this.state.isEmpNameValid}>
                           The EmpName is Must
                       </div>
                </div>
                <div className="form-group">
                  <input type="submit" value="Save"
                   disabled={!this.state.isFormValid}/>
                  <input type="button" value="Clear"/>

                </div>
            </form> 
        </div>
        );
    }
}
 
export default EmployeeValidationComponent;