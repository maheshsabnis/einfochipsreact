import React, { Component } from 'react';
class DropDownComponent extends Component {
    constructor(props) {
        super(props);
    }
    handleChange(evt){
        // the selectedValue is a method that will be subscribed by parent
        // to received the selected value from the child
        this.props.selectedValue(evt.target.value);
    }
    render() { 
        // this component must accept an array to populate options
        // this compoejnt must be awatr about the state property that
        // will be changed when an option is  selected
        // this component must emite an event so that
        // parent will receive data from the child component
        // the 'dataSource' will be the data received from parent
        // the 'stateProperty' is the property of the parent that will be updated when an option
        // is selected
        return (
            <select className="form-control"
             value={this.props.stateProperty}
              onChange={this.handleChange.bind(this)}>
                {
                    this.props.dataSource.map((data,index)=>(
                        <option key={index} value={data}>{data}</option>
                    ))
                }
            </select>
        );
    }
}
 
export default DropDownComponent;