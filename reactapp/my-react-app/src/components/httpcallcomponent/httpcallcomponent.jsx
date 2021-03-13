import React, { Component } from 'react'
import DataTableComponent from "./../reusablecomponents/datatablecomponent";
import { HttpService } from "./../../services/httpservice";


class HttpCallComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
           products:[],
           message:'' 
        };

        this.serv = new HttpService();
    }

    // access async method that update state property in the componentDidMount

    componentDidMount=()=>{
        this.loadData();
    }

    loadData=()=>{
        this.serv.getData().then((response)=>{
            console.log(`Received Response is = ${JSON.stringify(response.data)}`);
            this.setState({products: response.data},()=>{});
            this.setState({message: 'Data Received Successfully'});
        }).catch((error)=>{
            this.setState({message: `Error Occured ${error.message}`});
        });
    };

    save=()=>{
        let prd = {
            ProductRowId:0,
            ProductId: 'Prd-008',
            ProductName: 'Mouse',
            CategoryName:'Electronics',
            Manufacturer: 'HP',
            Description:'Optical',
            BasePrice:4000 
        };
        this.serv.postData(prd).then((response)=>{
            console.log(`Received Response is = ${JSON.stringify(response.data)}`);
            let tempArray = this.state.products.slice();
            tempArray.push(response.data);
            this.setState({products: tempArray},()=>{});
            this.setState({message: 'Data Received Successfully'});
        }).catch((error)=>{
            this.setState({message: `Error Occured ${error.message}`});
        });
    }

    render() { 
        return (  
            <div className="container">
                <h1>The Http Service calls using React App and Axios</h1>
                <DataTableComponent DataSource={this.state.products}></DataTableComponent>
                <br/>
                <table className="table table-bordered table-striped">
                  <tbody>
                    <tr>
                    <td>
                    <input type="button" value="Get" className="btn btn-warning"
                    onClick={this.loadData.bind(this)}/>
                    </td>
                      <td>
                      <input type="button" value="Save" className="btn btn-success"
                      onClick={this.save.bind(this)}/>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr/>
                <div className="container">
                  <strong>
                     {this.state.message}
                  </strong>
                </div>
            </div>
        );
    }
}
 
export default HttpCallComponent;