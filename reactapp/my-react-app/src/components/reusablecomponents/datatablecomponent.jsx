import React, { Component } from 'react';
class DataTableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    // emit the selected row value
    handleRowClick(rowValue){
        this.props.selectedRowValue(rowValue);
    }


    render() { 
        // read all properties of 0th record from the Data Source
        
       
       // if there are no records in the this.props.DataSource then render the following HTML
        if(this.props.DataSource.length === 0){
            // fallbakc UI must be rendred else the component will crash
            return (
                <div className="container">
                  <strong>No Record for Employees</strong>
                </div>
            );
        } else {
            const columnHeaders = Object.keys(this.props.DataSource[0]);
            console.log(JSON.stringify(columnHeaders));
        return ( 
            
            <div className="container">
              <table className="table table-bordered table-striped">
                <thead>
                   <tr>
                    {
                        columnHeaders.map((header,index)=>(
                            <th key={index}>{header}</th>
                        ))
                    }
                   </tr>
                </thead>
                <tbody>
                {
                    this.props.DataSource.map((row, idx)=>(
                        <tr key={idx} onClick={()=>this.handleRowClick(row)}>
                           {
                            columnHeaders.map((header,index)=>(
                                <td key={index}>{row[header]}</td>
                            ))
                           }
                           <td hidden={!this.props.canDelete}>
                                <input type="button"  value="Delete" className="btn btn-danger"/>    
                            </td>    
                        </tr>
                    ))
                }
                </tbody>
              </table>
            </div>
         );
        }
    }
}
 
export default DataTableComponent;